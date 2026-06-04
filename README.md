# La Tarda — Wine Bar Website

Static site for La Tarda (El Born, Barcelona).

## Open locally

```bash
cd ~/Desktop/wine-bar-website
open index.html
```

Or with a local server:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Push to GitHub

The project is already a git repo. To publish under [github.com/edavurgun](https://github.com/edavurgun):

1. Sign in at [github.com](https://github.com).
2. Create a new repository: [github.com/new](https://github.com/new)
   - **Name:** `wine-bar-website`
   - **Public**
   - Do **not** add a README, .gitignore, or license (this folder already has them).
3. In Terminal:

```bash
cd ~/Desktop/wine-bar-website
git push -u origin main
```

If GitHub asks you to sign in, use the browser or a [personal access token](https://github.com/settings/tokens) as the password.

Your site will be at: `https://github.com/edavurgun/wine-bar-website`

## Go live with your domain

After the repo is on GitHub, you can deploy free with [Netlify](https://www.netlify.com) or [GitHub Pages](https://pages.github.com) and connect `latarda.bar` in DNS.

## Customize

Edit `index.html` for copy, wines, hours, and contact links.
