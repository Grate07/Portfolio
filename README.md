# Grate portfolio

Standalone Vite + React export. No workspace packages or backend required.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Deploy to Vercel

### Deploy this ZIP

1. Unzip it, then open a terminal in the extracted folder—the folder containing `package.json` and `vercel.json`.
2. Run `npx vercel --prod` and follow the prompts to create or link a Vercel project.
3. Open the deployment URL shown by Vercel after the deployment finishes successfully.

The included `vercel.json` configures the Vite build and static output. If you set the project options manually, use **Vite**, `npm install`, `npm run build`, and `dist`.

### Import the original Replit repository

If deploying the full repository instead of this standalone ZIP, set **Root Directory** to `artifacts/grate-portfolio/vercel-export`. For this ZIP, use the extracted folder itself as the project root.

## Editing

Edit the copy and links in `src/App.tsx`; styles live in `src/index.css`. The Aster MC image is in `public/assets/aster-mc.jpg`.
