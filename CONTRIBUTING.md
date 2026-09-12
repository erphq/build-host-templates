# Contributing templates

## Submit a template

1. Fork this public repository and create a branch in your fork.
2. Choose `business-apps` or `landing-pages` and an existing category in `categories.json`.
3. Add `templates/<collection>/<slug>/template.json`, `PROMPT.md`, and `site/` with the working source, local assets, and credits. Use an existing entry as the metadata example. A slug is lowercase words separated by hyphens and must match its folder.
4. Add your profile to `contributors.json` with an ID, display name, and HTTPS GitHub profile URL. Do not add a verified badge. The maintainer reviews profile identity and attribution along with your submission.
5. Run `python3 scripts/build.py --check`, build and preview locally, and exercise desktop, phone, keyboard navigation, the primary workflow, and its error states.
6. Open a pull request. Include screenshots and describe what you verified. The automated job produces an artifact reviewers can download and serve locally.
7. A maintainer reviews the design, prompt completeness, behavior, originality, assets, and attribution. Address feedback in the same PR. After approval and passing checks, the maintainer merges it. A successful publication makes it discoverable on build.host.

A preview may be a working `interactive` demo or a `concept`; label it accurately. Do not present a screenshot or a mock control as a working integration. Business prompts should describe the real data storage, validation, and integrations required.

## Propose a category

Open a **Propose a category** issue with its parent collection, intended users, and example templates. A maintainer approves the category by merging its entry in `categories.json`. Contributors can then submit templates using that category ID. Categories are data, so a new category does not require a build.host UI change.

## Verified contributors

Verification is granted by maintainers after confirming the GitHub identity, ownership of submitted work, and contribution quality. A maintainer may set `verified: true` and `verifiedAt` on the reviewed contributor profile. This means **verified contributor**, not a guarantee that every template meets every business requirement.

Verification does not grant direct publishing rights or access to the private platform. Template-level `verified` fields are rejected. CODEOWNERS and required review protect the contributor list; a proposed change cannot authorize its own badge.

## Assets and data

Include complete prompts, source, image/font provenance, and applicable licenses. Use fictional sample data. Do not submit secrets, customer data, trackers, or files copied from products you do not have permission to redistribute. Keep assets local and reasonably sized. Describe external dependencies and do not bundle credentials.

## Updates

Submit updates through the same PR flow. Keep slugs stable so published links continue to work. Explain behavior changes and retain source credits. If an entry must be withdrawn, coordinate with a maintainer rather than deleting its public URL without a replacement.
