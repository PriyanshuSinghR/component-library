import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="description">
        <p className="tagline2">CompoLib</p>
        <p className="info">
          Empower Your Web Design Journey with Limitless Creativity, Unleash the
          Potential of Our Extensive CSS Component Library for Crafting Stunning
          and Highly Customized User Interfaces.
        </p>
        <button className="get-started-btn" onClick={() => navigate("/docs")}>
          Get Started
        </button>
      </div>
    </div>
  );
};
