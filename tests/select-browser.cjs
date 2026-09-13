const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 760 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.setContent(
    `<style>body{font:14px Arial;margin:24px;color:#123;background:#f5f5ef}select{padding:12px;border:1px solid #abc;border-radius:8px;width:100%}</style><form><label for="flavor">Flavor</label><select id="flavor" name="flavor" required><option value="">Choose a flavor</option><option value="apple">Apple</option><option disabled value="blocked">Blocked</option><optgroup label="More"><option value="berry">Berry</option><option value="citrus">Citrus</option></optgroup></select><button type="reset">Reset</button><button type="submit">Save</button></form><button id="outside" style="margin-top:400px">Outside</button>`,
  );
  await page.addScriptTag({
    path: require("node:path").join(__dirname, "../shared/controls/select.js"),
  });
  await page.evaluate(() => {
    window.events = [];
    document
      .querySelector("select")
      .addEventListener("change", () => window.events.push("change"));
    document
      .querySelector("select")
      .addEventListener("input", () => window.events.push("input"));
  });
  const trigger = page.getByRole("combobox", { name: "Flavor" });
  await trigger.click();
  assert.equal(await page.getByRole("option").count(), 5);
  await trigger.press("End");
  await trigger.press("Enter");
  assert.equal(await page.locator("select").inputValue(), "citrus");
  assert.deepEqual(await page.evaluate(() => window.events), [
    "input",
    "change",
  ]);
  assert.equal(
    await page.evaluate(() =>
      new FormData(document.querySelector("form")).get("flavor"),
    ),
    "citrus",
  );
  await trigger.click();
  await trigger.press("Home");
  await trigger.press("ArrowDown");
  await trigger.press("ArrowDown");
  await trigger.press("Enter");
  assert.equal(await page.locator("select").inputValue(), "berry");
  await trigger.click();
  await trigger.press("a");
  await trigger.press("Enter");
  assert.equal(await page.locator("select").inputValue(), "apple");
  await trigger.click();
  await trigger.press("Escape");
  assert.equal(await trigger.getAttribute("aria-expanded"), "false");
  await trigger.click();
  await page.locator("#outside").click();
  assert.equal(await trigger.getAttribute("aria-expanded"), "false");
  await trigger.click();
  await trigger.press("Tab");
  assert.equal(await trigger.getAttribute("aria-expanded"), "false");
  await page.getByRole("button", { name: "Reset", exact: true }).click();
  await page.waitForTimeout(40);
  assert.equal(await trigger.innerText(), "Choose a flavor");
  await page.getByRole("button", { name: "Save", exact: true }).click();
  assert.equal(await trigger.getAttribute("aria-invalid"), "true");
  await page.evaluate(() => (document.querySelector("select").value = "berry"));
  assert.equal(await trigger.innerText(), "Berry");
  await page.evaluate(() => {
    document.querySelector("select").disabled = true;
  });
  await page.waitForTimeout(40);
  assert(await trigger.isDisabled());
  await page.evaluate(() => {
    document.querySelector("select").disabled = false;
    document.querySelector("select").add(new Option("Dragon fruit", "dragon"));
  });
  await page.waitForTimeout(40);
  await trigger.click();
  assert.equal(await page.getByRole("option").count(), 6);
  await page.evaluate(() => {
    const dark = document.createElement("style");
    dark.textContent =
      "body.dark select{color:rgb(240,240,230);background-color:rgb(25,30,35)}";
    document.head.append(dark);
    document.body.classList.add("dark");
  });
  await page.waitForTimeout(50);
  assert.equal(
    await trigger.evaluate((node) => getComputedStyle(node).color),
    "rgb(240, 240, 230)",
  );
  assert.equal(
    await page
      .getByRole("listbox")
      .evaluate((node) => getComputedStyle(node).backgroundColor),
    "rgb(25, 30, 35)",
  );
  const box = await page.getByRole("listbox").boundingBox();
  assert(
    box.x >= 0 &&
      box.x + box.width <= 390 &&
      box.y >= 0 &&
      box.y + box.height <= 760,
  );

  await page.evaluate(() => document.querySelector("form").remove());
  await page.waitForTimeout(50);
  assert.equal(await page.getByRole("listbox").count(), 0);
  assert.equal(await page.getByRole("combobox").count(), 0);
  assert.deepEqual(errors, []);
  console.log(
    "PASS: keyboard, typeahead, disabled options, values, events, form data, reset, validation, dynamic options, programmatic changes, dismissal, mobile bounds and cleanup",
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
