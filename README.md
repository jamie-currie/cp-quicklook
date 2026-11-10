# cp-quicklook

A small static site that shows 3D models in the browser and in AR. Each model gets its own page, built on Google's [`<model-viewer>`](https://modelviewer.dev). The AR button opens the model in Quick Look on iPhone and iPad, and in WebXR on Android.

Live site: https://jamie-currie.github.io/cp-quicklook/

## Setup

You need Node 24 and [Git LFS](https://git-lfs.com).

```sh
git lfs install
npm install
npm run dev
```

The dev server runs over HTTPS with a self-signed certificate and listens on your local network, so you can open it on a phone to test AR. Accept the certificate warning the first time.

## Adding a model

Each model needs two files, both stored in Git LFS:

- `model.glb` for the browser and Android
- `model.usdz` for Quick Look on iOS

To add model 4:

1. Put the files in `public/models/4/`.
2. Copy `3/index.html` to `4/index.html` and change the `3`s to `4`s (title, `src`, `ios-src` and `alt`).
3. Add `4: '4/index.html'` to `build.rollupOptions.input` in `vite.config.js`.
4. Add a card for it to the root `index.html`.

## Deploying

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/pages.yml`). Run `npm run build` to check the build locally; the output goes to `dist/`.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The home page that lists the models |
| `1/`, `2/`, `3/` | One viewer page per model |
| `src/main.js` | Loads `<model-viewer>` and handles the spinner, AR button and hint text |
| `src/style.css` | Styles for the viewer pages |
| `public/models/N/` | Model files, copied as they are into the build |
