import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col items-center">
      <div className="flex-grow flex items-center">
        <p>About Section</p>
      </div>
      <button
      className="mb-0 rounded-md bg-gray-300 hover:underline"
      onClick={() => navigate("/about")}
      >Learn More</button>
    </div>
  );
}

export default About;
