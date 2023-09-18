import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const activeStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "#5653f5" : "none",
    fontWeight: isActive ? "500" : ""
  });
  return (
    <div className="sidebar">
      <ul className="components-list">
        <NavLink to="/docs/avatar" className="link" style={activeStyles}>
          Avatar
        </NavLink>
        <NavLink to="/docs/alert" className="link" style={activeStyles}>
          Alert
        </NavLink>
        <NavLink to="/docs/badge" className="link" style={activeStyles}>
          Badge
        </NavLink>
        <NavLink to="/docs/button" className="link" style={activeStyles}>
          Button
        </NavLink>
        <NavLink to="/docs/card" className="link" style={activeStyles}>
          Card
        </NavLink>
        <NavLink to="/docs/heading" className="link" style={activeStyles}>
          Heading
        </NavLink>
        <NavLink to="/docs/text" className="link" style={activeStyles}>
          Text
        </NavLink>
        <NavLink to="/docs/image" className="link" style={activeStyles}>
          Image
        </NavLink>
      </ul>
    </div>
  );
};
