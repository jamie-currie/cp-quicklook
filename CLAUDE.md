# cp-quicklook

Static Vite site with one `<model-viewer>` page per 3D model, deployed to GitHub Pages on every push to `main`. Read `README.md` for setup, layout and the steps for adding a model.

## Commands

- `npm run dev`: HTTPS dev server, reachable on the local network for testing AR on a phone
- `npm run build`: builds to `dist/`

## Conventions

- Model files are only `.glb` and `.usdz`, both tracked in Git LFS. Don't add other types to `.gitattributes`.
- No `.gitkeep` files in the model folders.
- `src/style.css` is for the viewer pages only. The root `index.html` keeps its own styles inline.
- Viewer pages should stay identical apart from the model number.
- UI text is in British English (`lang="en-GB"`).
