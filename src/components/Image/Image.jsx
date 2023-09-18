import "./Image.css";

export const Image = (props) => {
  const { srcImg, altText, width, height } = props;
  return (
    <img
      src={srcImg}
      alt={altText}
      className="resp-img"
      style={{ width: width, height: height }}
    />
  );
};

export const RoundImage = (props) => {
  const { srcImg, altText, size } = props;
  return (
    <img
      src={srcImg}
      alt={altText}
      className="round-img"
      style={{ width: size, height: size }}
    />
  );
};
