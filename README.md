# build.host templates

Business app and landing page templates, complete build prompts, and working previews for [build.host](https://build.host).

This is the public contribution repository. The build.host platform, dashboard, authentication, hosting APIs, and infrastructure are maintained separately in the private platform repository. Contributors do not need platform access.

## Browse and use

Browse **Business Apps**, then **Landing Pages**, on build.host. Each template includes a complete prompt, a preview, source downloads, and author attribution. Interactive demos and visual concepts are labeled separately.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) for submitting work, adding categories, becoming a verified contributor, and the review-to-publication flow. [Maintainer instructions](docs/maintaining.md) cover approvals and publishing.

```text
templates/
  business-apps/<slug>/
  landing-pages/<slug>/
    template.json       # Search/category/author metadata
    PROMPT.md           # Complete build specification
    site/               # Editable demo, assets, and licensing credits
categories.json         # Maintainer-owned category definitions
contributors.json       # Maintainer-owned profiles and verification
scripts/build.py        # Validates and assembles the published catalog
```

## Local preview

Python 3.10+ is sufficient; no private account or deployment token is required.

```sh
python3 scripts/build.py
python3 -m http.server 4174 --directory dist
```

Open the template's `site/index.html` path from the generated `catalog.json`. ZIP downloads include the complete prompt, source, and assets.

The build bundles the shared styled dropdown runtime into preview pages and ZIP downloads. To check form behavior in a real browser, install Playwright in your local tooling and run `node tests/select-browser.cjs` (or set `PLAYWRIGHT_MODULE` to your existing Playwright installation). This checks keyboard navigation, disabled choices, form values/events, reset/validation, dynamic options, and viewport bounds. `python3 -m unittest discover -s tests` verifies that every packaged page includes the runtime and its local references resolve.

## Publication

Pull requests run validation and produce a downloadable preview artifact. Changes merged into `main` publish the static catalog and assets as an immutable GitHub Release. build.host consumes this catalog, so template updates do not require a platform-code release. Previews run on a separate origin from the authenticated platform.

## Credits and licensing

The initial landing-page collection is migrated from ProtoSites with the owner's authorization. Original reference acknowledgements, image provenance, and font licenses are retained beside the assets. Referenced products are inspiration, not authors or endorsers of these templates.

Repository tooling and original template code/prompts are under [MIT](LICENSE). Third-party assets retain their own licenses; this repository's license does not relicense photography, fonts, or other third-party material. Read each template's credits before redistributing assets.

The catalog assets are served from `https://template-assets.build.host`, a separate browser origin from the authenticated platform. Organization policy disables GitHub Pages, so publication uses GitHub Releases instead. The server imports a successfully published release within five minutes; the platform refreshes its catalog within another minute.

Business-preview migration status: all 43 complete prompts and original deployed visual concepts are retained. The owner is supplying the original editable business gallery project to replace the preserved compiled preview bundle. These entries are labeled design concepts rather than working applications.
