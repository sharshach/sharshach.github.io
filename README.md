# Sri Harsha Chilukuri

Personal portfolio for [harsha.chilukuri.in](https://harsha.chilukuri.in).
Built with the existing React / Create React App toolchain.

## Local development

Run `npm ci`, then `npm start`. Run `CI=true npm test -- --watch=false --runInBand`
for the regression suite, and `npm run build` for the production bundle.

The terminal accepts the listed portfolio commands only; it does not execute code.
The theme switch supports click, Enter / Space, and a downward pull. Themes apply
to the whole site, start from the system preference, and persist locally when
browser storage is available. Essential career information is readable without
using the terminal.

## Updating public content

Identity and contact links live in `src/data/profile.json`, the confirmed timeline
in `jobs.json`, and high-level employer experience in `experience.json`.
`github-stats.json` is a curated list of earlier public projects, not a live stats
feed. Project notes and legacy route entries live in `project.json`.

Verify role dates, public repository links, contributions, and outcome claims
before editing. Keep employer experience separate from personal projects; do not
publish confidential implementation details, metrics, or unapproved assets.
The resume link intentionally requests a current resume by email rather than
publishing an unapproved PDF. Earlier projects are labeled archival.

## Publishing

This refresh is for review, not automatic publication. Existing Firebase hosting
rewrites and deployment conventions are unchanged. **Opening a pull request runs
the Firebase preview workflow; pushing to `main` deploys live.** Only trigger
either after approval. `npm run deploy` also publishes to GitHub Pages and should
not be used as a local validation command.