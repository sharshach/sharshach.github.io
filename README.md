# Sri Harsha Chilukuri

Personal portfolio for [harsha.chilukuri.in](https://harsha.chilukuri.in).
Built with the existing React / Create React App toolchain.

## Local development

Run `npm ci`, then `npm start`. Run `CI=true npm test -- --watch=false --runInBand`
for the regression suite, and `npm run build` for the production bundle.

The terminal retains the original read-only, animated introduction and command
sequence. It is not an interactive shell. Its authored content and links are
current; the original pause/reveal timing, prompt, purple surface, and title bar
are preserved. Reduced-motion users receive the complete transcript immediately,
and its timers are canceled on unmount.
The theme switch supports click, Enter / Space, and a downward pull. Themes apply
to the whole site, start from the system preference, and persist locally when
browser storage is available. The opening introduction and professional overview
are complete viewport-sized sections when the content fits. They grow naturally
on smaller screens and at increased text sizes; there is no scroll trapping or
mandatory snapping. Essential career information never waits for the terminal.
On desktop, the name and role span the opening scene above a 40% profile-text /
60% terminal split. The terminal frame keeps a 4:3 aspect ratio at every size,
with its transcript scrolling inside the frame. Major sections use subtly distinct full-width backgrounds
in both themes; smaller screens keep the identity above the stacked content.

## Updating public content

Identity and contact links live in `src/data/profile.json`, the confirmed timeline
in `jobs.json`, and selected employer experience in `experience.json`.
Personal engineering-assistant examples live in `automations.json`; team
enablement and innovation content is in `App.js`. Public SPFx resources are
linked from the charting experience, with the community video distinguished
from the Microsoft Learn documentation.
`github-stats.json` is a curated list of earlier public projects, not a live stats
feed. Project notes and legacy route entries live in `project.json`.

Verify role dates, public repository links, contributions, and outcome claims
before editing. Keep employer experience separate from personal projects; do not
publish confidential implementation details, metrics, or unapproved assets.
The CV link uses the Google Drive URL supplied by the user; no PDF asset is
copied into this repository. Earlier projects are labeled archival. Cross-product
analytics is presented as implementation and staged validation, not a confirmed
production rollout. Technology skills are named without exposing internal
topology or data contracts, and prototypes remain distinct from shipped work.

## Publishing

This refresh is for review, not automatic publication. Existing Firebase hosting
rewrites and deployment conventions are unchanged. **Opening a pull request runs
the Firebase preview workflow; pushing to `main` deploys live.** Only trigger
either after approval. `npm run deploy` also publishes to GitHub Pages and should
not be used as a local validation command.