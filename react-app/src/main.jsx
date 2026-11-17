import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'

// HashRouter (URLs like /#/services) instead of BrowserRouter (/services).
// GitHub Pages is a plain static file host with no server-side rewrite
// rules, so a direct link or page refresh on /services would 404 - there's
// no server to say "serve index.html and let React figure out the route".
// With HashRouter, everything after the # is handled entirely by the
// browser/React and never touches the server, so it always works.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
