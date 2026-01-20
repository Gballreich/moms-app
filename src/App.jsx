import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            header={<Header />}
            main={<MainContent />}
            footer={<Footer />}
          />
        }
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/info" element={<InfoPage />} />

    </Routes>
  );
}

export default App;
