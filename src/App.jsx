import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Layout
      header={<Header />}
      main={<MainContent />}
      footer={<Footer />}
    />
  );
}

export default App;
