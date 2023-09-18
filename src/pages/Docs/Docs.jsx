import { Link } from "react-router-dom";
import "./Docs.css";

export const Docs = () => {
  return (
    <div className="docs">
      <div className="components-list">
        <span className="title">All Components</span>
        <ul className="list">
          <Link to="/docs/avatar">
            <li>Avatar</li>
          </Link>
          <Link to="/docs/alert">
            <li>Alert</li>
          </Link>
          <Link to="/docs/badge">
            <li>Badge</li>
          </Link>
          <Link to="/docs/button">
            <li>Button</li>
          </Link>
          <Link to="/docs/heading">
            <li>Heading</li>
          </Link>
          <Link to="/docs/card">
            <li>Card</li>
          </Link>
          <Link to="/docs/text">
            <li>Text</li>
          </Link>
          <Link to="/docs/image">
            <li>Image</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
