import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Products from "./Products.jsx";
import Information from "./Information.jsx";

function MainContent() {
  const location = useLocation();
  console.log("Current location:", location);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
      window.history.replaceState(null, "", "/");
    }
  }, [location]);


  return (
    <main className="h-full w-full flex flex-col">
      <section id="about" className="min-h-full w-full snap-start border border-red-500">
        <About />
      </section>

      <section id="services" className="min-h-full w-full snap-start border border-blue-500">
        <Services />
      </section>

      <section id="products" className="min-h-full w-full snap-start border border-green-500">
        <Products />
      </section>

      <section id="information" className="min-h-full w-full snap-start border border-yellow-500">
        <Information />
      </section>
    </main>
  );
}

export default MainContent;
