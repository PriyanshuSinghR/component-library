import { CodeBlock } from "../.";
import "./ComponentContainer.css";

export const ComponentContainer = ({
  title,
  description,
  codeString,
  children,
  column
}) => {
  const style = {
    display: "flex",
    flexDirection: column ? "column" : "row",
    alignItems: column ? "left" : "center",
    justifyContent: "left",
    gap: "1.5rem",
    padding: "1.25rem"
  };
  return (
    <div className="component-container">
      <div className="component-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="component-content" style={style}>
        {children}
      </div>
      <h3>How to use {title || "this"} component?</h3>
      <CodeBlock codeString={codeString} />
    </div>
  );
};
