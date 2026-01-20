import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#" + id);
    }
  };

  return (
    <div className="flex justify-evenly items-center w-full h-full">
      <p
        onClick={() => goTo("about")}
        className="cursor-pointer hover:underline underline-offset-4"
      >
        About
      </p>

      <p
        onClick={() => goTo("services")}
        className="cursor-pointer hover:underline underline-offset-4"
      >
        Services
      </p>

      <p
        onClick={() => goTo("products")}
        className="cursor-pointer hover:underline underline-offset-4"
      >
        Products
      </p>

      <p
        onClick={() => goTo("information")}
        className="cursor-pointer hover:underline underline-offset-4"
      >
        Information
      </p>
    </div>
  );
}

export default Header;


