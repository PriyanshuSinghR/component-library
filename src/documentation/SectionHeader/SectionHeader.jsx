import "./SectionHeader.css";

export const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header-container">
      <h1 className="section-title">{title}</h1>
      <p className="section-description">{description}</p>
    </div>
  );
};
