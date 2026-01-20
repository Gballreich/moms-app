import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  return (
     <div className="min-h-full flex flex-col items-center">
      <div className="flex-grow flex items-center">
        <p>Products Section</p>
      </div>
      <button
      className="mb-0 rounded-md bg-gray-300 hover:underline"
      onClick={() => navigate("/products")}
      >Learn More</button>
    </div>
  );
}

export default Products;
