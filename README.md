# Aligna investor website

A zero-dependency static landing page for presenting Aligna to investors, sponsors, accelerators and partners.

## Run locally
Open `index.html` directly, or from this folder run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy free with GitHub Pages
1. Create a new repository, for example `aligna-website`.
2. Add `index.html`, `styles.css` and `script.js` to the repository root.
3. Push to GitHub.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose `main` and `/ (root)`, then save.

## Deploy free with Vercel
Import the GitHub repository into Vercel and deploy it as a static site. No build command is required.

## Before sending to investors
Replace `replace-me@example.com` in `index.html` with your preferred founder/contact email and add real Aligna screenshots once you are ready. The current product visuals are custom CSS mockups, so the page works even without screenshots.
