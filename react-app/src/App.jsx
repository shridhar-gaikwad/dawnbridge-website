import Home from './pages/Home';

// App is the root component. For now it only ever renders the Home page.
// Later, if you migrate more pages (Services, Contact, ...), this is where
// a router would decide which page component to render based on the URL.
function App() {
  return <Home />;
}

export default App;
