# Maintainer guide

The initial maintainer is `@vishprometa`. No additional users are granted write access automatically.

## Review and publish

Require **Validate collection** and an approving code-owner review on `main`. Dismiss stale reviews when source changes. Ordinary contributors submit through forks. CODEOWNERS must itself remain owned by maintainers. An administrator can perform initial setup or emergency maintenance, but routine submissions follow review.

Before merging, download the preview artifact, inspect the working UI, and check the full prompt and asset provenance. Static catalog validation proves structural consistency; it does not prove quality, security, authorship, licensing, or correct business behavior. Those require review.

The publication job runs only for `main` or a manual run on `main`. It uses GitHub's short-lived Pages token and has no build.host platform credentials. Pull-request jobs have read-only permissions and cannot publish. Never add platform secrets to this repository or run untrusted PR code with production credentials.

The platform fetches the published catalog and shows template assets from the separate preview origin. A failed publication leaves the previous published Pages release available. Use the Actions publication status to confirm success before announcing an entry.

## Add a category

Add `{ "id": "restaurants", "name": "Restaurants", "collection": "business-apps" }` to `categories.json`, review it, and merge. Each `(collection, id)` must be unique. The website derives filters from this file.

## Verify a contributor

Confirm their GitHub account and that their submitted work is theirs to contribute. Review their template quality. Update the profile in `contributors.json` with `verified: true` and an ISO date in `verifiedAt`. Remove verification when it is no longer warranted. Verification is not a publish permission.

## Appoint a category reviewer

Grant a selected person the appropriate repository role deliberately, then add their GitHub handle to the matching category/template paths in CODEOWNERS. Protect contributors, categories, scripts, and workflows with the primary maintainer. Do not grant private platform access merely to review templates.
