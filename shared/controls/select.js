/* build.host template controls — MIT. Native elements retain form and event semantics. */
(() => {
  if (window.buildHostSelects) return;
  window.buildHostSelects = true;
  const controls = new Map();
  let active = null;
  let sequence = 0;
  const sheet = document.createElement("style");
  sheet.textContent = `
    select.bh-select-native {position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip-path:inset(50%)!important;white-space:nowrap!important;opacity:0!important;pointer-events:none!important}
    button.bh-select-trigger {box-sizing:border-box!important;display:inline-flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;max-width:100%!important;min-height:40px!important;text-align:left!important;cursor:pointer!important;text-transform:none!important;letter-spacing:normal!important;box-shadow:none!important;vertical-align:middle!important}
    button.bh-select-trigger[hidden] {display:none!important}
    button.bh-select-trigger:disabled {opacity:.5!important;cursor:not-allowed!important}
    button.bh-select-trigger:focus-visible,button.bh-select-trigger[aria-expanded=true] {outline:2px solid currentColor!important;outline-offset:3px!important}
    .bh-select-value {overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}
    .bh-select-arrow {flex:none!important;width:14px!important;height:14px!important;margin-left:auto!important;transition:transform 140ms ease}
    [aria-expanded=true]>.bh-select-arrow {transform:rotate(180deg)}
    .bh-select-menu {box-sizing:border-box!important;position:fixed!important;inset:auto;margin:0!important;padding:5px!important;border:1px solid var(--bh-line)!important;border-radius:var(--bh-radius)!important;background:var(--bh-bg)!important;color:var(--bh-ink)!important;font:var(--bh-font)!important;text-align:left!important;letter-spacing:normal!important;text-transform:none!important;box-shadow:0 10px 32px #0002!important;overflow:auto!important;overscroll-behavior:contain;z-index:2147483647!important;max-width:calc(100vw - 24px)!important}
    .bh-select-menu:not(:popover-open) {display:none}
    .bh-select-menu[data-fallback=open] {display:block}
    .bh-select-menu .bh-select-option {position:relative;box-sizing:border-box;display:flex;align-items:center;gap:10px;min-height:38px;padding:9px 34px 9px 11px;border:0;border-radius:calc(var(--bh-radius) * .65);color:inherit;background:transparent;font:inherit;line-height:1.4;text-align:left;overflow-wrap:anywhere;cursor:pointer;user-select:none}
    .bh-select-option[data-active=true] {background:color-mix(in srgb,var(--bh-ink) 9%,var(--bh-bg))}
    .bh-select-option[aria-selected=true] {font-weight:600}
    .bh-select-option[aria-selected=true]::after {content:'✓';position:absolute;right:11px;font-family:system-ui,sans-serif}
    .bh-select-option[aria-disabled=true] {opacity:.45;cursor:not-allowed}
    .bh-select-menu .bh-select-option[hidden] {display:none!important}
    .bh-select-error {display:block;font:inherit;font-size:.875em;margin-top:6px}
    .bh-select-group {padding:9px 11px 5px;font-size:.85em;opacity:.65}
    @media(pointer:coarse) {.bh-select-menu .bh-select-option {min-height:44px}}
    @media(prefers-reduced-motion:reduce) {.bh-select-arrow {transition:none}}
  `;
  document.head.append(sheet);

  function background(element) {
    for (let node = element; node; node = node.parentElement) {
      const color = getComputedStyle(node).backgroundColor;
      if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent") return color;
    }
    return "#fff";
  }

  function labelFor(select) {
    const explicit = select.getAttribute("aria-label");
    if (explicit) return explicit;
    const labels = Array.from(select.labels || []).map((label) => {
      const copy = label.cloneNode(true);
      copy
        .querySelectorAll("select,button,input,textarea")
        .forEach((node) => node.remove());
      return copy.textContent.trim();
    });
    return labels.join(" ") || select.name || "Choose an option";
  }

  function close() {
    if (!active) return;
    const control = active;
    active = null;
    if (control.menu.hidePopover && control.menu.matches(":popover-open"))
      control.menu.hidePopover();
    control.menu.remove();
    control.trigger.setAttribute("aria-expanded", "false");
    control.trigger.removeAttribute("aria-activedescendant");
    control.trigger.removeAttribute("aria-controls");
  }

  function place(control) {
    const rect = control.trigger.getBoundingClientRect();
    const menu = control.menu;
    const viewport = window.visualViewport;
    const left = viewport?.offsetLeft || 0;
    const top = viewport?.offsetTop || 0;
    const width = viewport?.width || innerWidth;
    const height = viewport?.height || innerHeight;
    const below = top + height - rect.bottom - 18;
    const above = rect.top - top - 18;
    const upward = below < Math.min(menu.scrollHeight, 240) && above > below;
    menu.style.width = `${Math.min(Math.max(rect.width, 180), width - 24)}px`;
    menu.style.maxHeight = `${Math.max(40, Math.min(320, upward ? above : below))}px`;
    menu.style.left = `${Math.max(left + 12, Math.min(rect.left, left + width - menu.offsetWidth - 12))}px`;
    menu.style.top = `${upward ? Math.max(top + 12, rect.top - menu.offsetHeight - 6) : rect.bottom + 6}px`;
  }

  function highlight(control, index) {
    const option = control.items[index];
    if (!option || option.getAttribute("aria-disabled") === "true") return;
    control.index = index;
    control.items.forEach((item, at) => {
      item.dataset.active = String(at === index);
    });
    control.trigger.setAttribute("aria-activedescendant", option.id);
    option.scrollIntoView({ block: "nearest" });
  }

  function choose(control, index) {
    const option = control.select.options[index];
    if (
      !option ||
      option.disabled ||
      option.parentElement.disabled ||
      control.select.matches(":disabled")
    )
      return;
    const changed = control.select.selectedIndex !== index;
    control.select.selectedIndex = index;
    close();
    control.trigger.focus({ preventScroll: true });
    if (changed) {
      control.select.dispatchEvent(new Event("input", { bubbles: true }));
      control.select.dispatchEvent(new Event("change", { bubbles: true }));
    }
    sync(control);
  }

  function open(control) {
    close();
    sync(control);
    if (control.trigger.disabled) return;
    active = control;
    const { select, menu, trigger } = control;
    menu.replaceChildren();
    control.items = [];
    let group = null;
    Array.from(select.options).forEach((option, index) => {
      if (
        option.parentElement.tagName === "OPTGROUP" &&
        group !== option.parentElement
      ) {
        group = option.parentElement;
        const heading = document.createElement("div");
        heading.className = "bh-select-group";
        heading.textContent = group.label;
        menu.append(heading);
      }
      const item = document.createElement("div");
      item.className = "bh-select-option";
      item.id = `${menu.id}-${index}`;
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", String(option.selected));
      item.setAttribute(
        "aria-disabled",
        String(option.disabled || !!option.parentElement.disabled),
      );
      item.hidden = option.hidden;
      item.textContent = option.label;
      item.addEventListener("pointermove", () => highlight(control, index));
      item.addEventListener("pointerdown", (event) => event.preventDefault());
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        choose(control, index);
      });
      control.items.push(item);
      menu.append(item);
    });
    document.body.append(menu);
    if (menu.showPopover) menu.showPopover();
    else menu.dataset.fallback = "open";
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-controls", menu.id);
    place(control);
    const enabled = control.items.findIndex(
      (item) => item.getAttribute("aria-disabled") !== "true" && !item.hidden,
    );
    const selected = control.items[select.selectedIndex];
    highlight(
      control,
      !selected ||
        selected.hidden ||
        selected.getAttribute("aria-disabled") === "true"
        ? enabled
        : select.selectedIndex,
    );
  }

  function navigate(control, event) {
    const key = event.key;
    if (key === "Escape" || key === "Tab") {
      if (active === control) close();
      if (key === "Escape") event.preventDefault();
      return;
    }
    if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(key)) {
      event.preventDefault();
      if (active !== control) {
        open(control);
        return;
      }
      if (key === "Enter" || key === " ") {
        choose(control, control.index);
        return;
      }
      const enabled = control.items.flatMap((item, i) =>
        item.getAttribute("aria-disabled") === "true" || item.hidden ? [] : [i],
      );
      const current = enabled.indexOf(control.index);
      const next =
        key === "Home"
          ? 0
          : key === "End"
            ? enabled.length - 1
            : Math.max(
                0,
                Math.min(
                  enabled.length - 1,
                  current + (key === "ArrowDown" ? 1 : -1),
                ),
              );
      highlight(control, enabled[next]);
    } else if (
      key.length === 1 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      if (active !== control) open(control);
      const now = Date.now();
      control.search = now - control.typedAt < 700 ? control.search + key : key;
      control.typedAt = now;
      const query = control.search.toLocaleLowerCase();
      const at = control.items.findIndex(
        (item) =>
          !item.hidden &&
          item.getAttribute("aria-disabled") !== "true" &&
          item.textContent.trim().toLocaleLowerCase().startsWith(query),
      );
      highlight(control, at);
    }
  }

  function sync(control) {
    const { select, trigger, value } = control;
    const text = select.selectedOptions[0]?.label || "Select an option";
    if (value.textContent !== text) value.textContent = text;
    trigger.disabled = select.matches(":disabled");
    trigger.hidden = select.hidden;
    const invalid = select.getAttribute("aria-invalid");
    if (invalid) trigger.setAttribute("aria-invalid", invalid);
    else if (select.validity.valid) {
      trigger.removeAttribute("aria-invalid");
      if (control.error) {
        control.error.remove();
        control.error = null;
        if (select.hasAttribute("aria-describedby"))
          trigger.setAttribute(
            "aria-describedby",
            select.getAttribute("aria-describedby"),
          );
        else trigger.removeAttribute("aria-describedby");
      }
    }
    if (active === control && (trigger.disabled || trigger.hidden)) close();
  }

  function enhance(select) {
    if (
      controls.has(select) ||
      select.multiple ||
      select.size > 1 ||
      select.closest("[data-custom-select]")
    )
      return;
    const style = getComputedStyle(select);
    if (
      style.display === "none" ||
      style.visibility === "hidden" ||
      !select.getClientRects().length
    )
      return;
    const width = select.getBoundingClientRect().width;
    const parentWidth = select.parentElement.getBoundingClientRect().width;
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = `${select.className} bh-select-trigger`;
    trigger.setAttribute("role", "combobox");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", labelFor(select));
    for (const attribute of [
      "aria-labelledby",
      "aria-describedby",
      "aria-required",
    ]) {
      if (select.hasAttribute(attribute))
        trigger.setAttribute(attribute, select.getAttribute(attribute));
    }
    if (select.required) trigger.setAttribute("aria-required", "true");
    for (const property of [
      "font",
      "color",
      "backgroundColor",
      "border",
      "borderRadius",
      "padding",
      "margin",
      "flex",
      "alignSelf",
      "gridColumn",
    ]) {
      trigger.style[property] = style[property];
    }
    trigger.style.width =
      width >= parentWidth * 0.8 ? "100%" : `${Math.ceil(width + 16)}px`;
    trigger.style.minWidth = "0";
    trigger.style.paddingRight = "12px";
    trigger.style.paddingLeft =
      Math.max(10, parseFloat(style.paddingLeft) || 0) + "px";
    if (parseFloat(style.fontSize) < 12) trigger.style.fontSize = "14px";
    const value = document.createElement("span");
    value.className = "bh-select-value";
    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrow.classList.add("bh-select-arrow");
    arrow.setAttribute("viewBox", "0 0 24 24");
    arrow.setAttribute("fill", "none");
    arrow.setAttribute("stroke", "currentColor");
    arrow.setAttribute("stroke-width", "1.7");
    arrow.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m6 9 6 6 6-6");
    arrow.append(path);
    trigger.append(value, arrow);
    const menu = document.createElement("div");
    menu.id = `bh-select-${++sequence}`;
    menu.className = "bh-select-menu";
    menu.setAttribute("popover", "manual");
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-label", labelFor(select));
    menu.style.setProperty("--bh-bg", background(select));
    menu.style.setProperty("--bh-ink", style.color);
    menu.style.setProperty(
      "--bh-line",
      style.borderTopWidth !== "0px"
        ? style.borderTopColor
        : "color-mix(in srgb, currentColor 20%, transparent)",
    );
    menu.style.setProperty(
      "--bh-radius",
      parseFloat(style.borderRadius) > 12
        ? "12px"
        : style.borderRadius || "8px",
    );
    menu.style.setProperty(
      "--bh-font",
      `${Math.max(13, parseFloat(style.fontSize) || 14)}px/1.5 ${style.fontFamily}`,
    );
    const control = {
      select,
      trigger,
      value,
      menu,
      items: [],
      index: -1,
      search: "",
      typedAt: 0,
      error: null,
    };
    controls.set(select, control);
    select.before(trigger);
    select.classList.add("bh-select-native");
    select.setAttribute("aria-hidden", "true");
    select.tabIndex = -1;
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      active === control ? close() : open(control);
    });
    trigger.addEventListener("keydown", (event) => navigate(control, event));
    select.addEventListener("change", () =>
      queueMicrotask(() => sync(control)),
    );
    select.addEventListener("focus", () => trigger.focus());
    select.addEventListener("invalid", (event) => {
      event.preventDefault();
      trigger.setAttribute("aria-invalid", "true");
      if (!control.error) {
        control.error = document.createElement("span");
        control.error.className = "bh-select-error";
        control.error.id = `${menu.id}-error`;
        control.error.setAttribute("role", "alert");
        trigger.after(control.error);
      }
      control.error.textContent = select.validationMessage;
      trigger.setAttribute(
        "aria-describedby",
        [select.getAttribute("aria-describedby"), control.error.id]
          .filter(Boolean)
          .join(" "),
      );
      trigger.focus();
    });
    // Existing demos assign values directly when resetting filters or loading a record.
    for (const property of ["value", "selectedIndex"]) {
      if (Object.getOwnPropertyDescriptor(select, property)) continue;
      const descriptor = Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        property,
      );
      Object.defineProperty(select, property, {
        configurable: true,
        get() {
          return descriptor.get.call(this);
        },
        set(next) {
          descriptor.set.call(this, next);
          sync(control);
        },
      });
    }
    sync(control);
  }

  function scan() {
    document.querySelectorAll("select").forEach(enhance);
    controls.forEach((control, select) => {
      if (!select.isConnected) {
        if (active === control) close();
        control.trigger.remove();
        control.error?.remove();
        controls.delete(select);
      } else sync(control);
    });
  }
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      scan();
    });
  };
  new MutationObserver((records) => {
    if (
      records.some(
        (record) =>
          !record.target.closest?.(".bh-select-trigger,.bh-select-menu"),
      )
    )
      schedule();
  }).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: [
      "disabled",
      "hidden",
      "selected",
      "label",
      "aria-invalid",
      "class",
    ],
  });
  document.addEventListener("reset", schedule, true);
  document.addEventListener("change", schedule, true);
  document.addEventListener("click", schedule, true);
  document.addEventListener(
    "pointerdown",
    (event) => {
      if (
        active &&
        !active.trigger.contains(event.target) &&
        !active.menu.contains(event.target)
      )
        close();
    },
    true,
  );
  document.addEventListener(
    "scroll",
    (event) => {
      if (active && !active.menu.contains(event.target)) close();
    },
    true,
  );
  window.addEventListener("resize", () => {
    close();
    schedule();
  });
  scan();
})();
