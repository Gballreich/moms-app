import { useNavigate } from "react-router-dom";

function Services() {
    const navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col items-center">
      <div className="flex-grow flex items-center">
        <p>Services Section</p>
      </div>
      <button
      className="mb-0 rounded-md bg-gray-300 hover:underline"
      onClick={() => navigate("/services")}
      >Learn More</button>
    </div>
  );
}

export default Services;
