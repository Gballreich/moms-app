import { useNavigate } from "react-router-dom";

function Information() {
  const navigate = useNavigate();
    return(
    <div className="min-h-full flex flex-col items-center">
      <div className="flex-grow flex items-center">
        <p>Information Section</p>
      </div>
      <button
      className="mb-0 rounded-md bg-gray-300 hover:underline"
      onClick={() => navigate("/info")}
      >Learn More</button>
    </div>
    )
}

export default Information;