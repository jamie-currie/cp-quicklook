# cp-quicklook

Static Vite site with one `<model-viewer>` page per 3D model, deployed to GitHub Pages on every push to `main` (`.github/workflows/pages.yml`).

## Setup

Needs Node 24 and [Git LFS](https://git-lfs.com).

```sh
git lfs install
npm install
npm run dev
```

## Commands

- `npm run dev`: HTTPS dev server with a self-signed certificate, reachable on the local network for testing AR on a phone (accept the certificate warning the first time)
- `npm run build`: builds to `dist/`

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The home page that lists the models |
| `1/`, `2/`, `3/` | One viewer page per model |
| `src/main.js` | Loads `<model-viewer>` and handles the spinner, AR button and hint text |
| `src/style.css` | Styles for the viewer pages |
| `public/models/N/` | Model files, copied as they are into the build |

## Adding a model

Each model needs `model.glb` (browser and Android) and `model.usdz` (Quick Look on iOS). To add model 4:

1. Put the files in `public/models/4/`.
2. Copy `3/index.html` to `4/index.html` and change the `3`s to `4`s (title, `src`, `ios-src` and `alt`).
3. Add `4: '4/index.html'` to `build.rollupOptions.input` in `vite.config.js`.
4. Add a card for it to the root `index.html`.

## Conventions

- Model files are only `.glb` and `.usdz`, both tracked in Git LFS. Don't add other types to `.gitattributes`.
- No `.gitkeep` files in the model folders.
- `src/style.css` is for the viewer pages only. The root `index.html` keeps its own styles inline.
- Viewer pages should stay identical apart from the model number.
- UI text is in British English (`lang="en-GB"`).
