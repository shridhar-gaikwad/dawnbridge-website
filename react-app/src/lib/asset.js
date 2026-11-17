// import.meta.env.BASE_URL is set by Vite from the `base` option in
// vite.config.js ("/dawnbridge-website/" in production, "/" during
// npm run dev). Routing every public asset path through this function
// means the code works the same on localhost and on GitHub Pages.
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
