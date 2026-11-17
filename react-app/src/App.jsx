import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';

// Routes maps a URL path to a page component. The <Route element={<Layout />}>
// wrapper means every page listed inside it renders through Layout (so they
// all get the header/footer), appearing wherever Layout's <Outlet /> is.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
