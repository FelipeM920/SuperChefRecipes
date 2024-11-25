import "./style.scss";
import PropTypes from "prop-types";

ImageHolder.propTypes = {
  imageSource: PropTypes.string,
};

export default function ImageHolder(props) {
  const { imageSource } = props;

  let safeImageSource = imageSource ?? "https://via.assets.so/game.png?id=3&q=95&w=500&h=200&fit=fill";

  return (
    <section className="imageHolder">
      <img
        src={safeImageSource}
        alt="image alt temp"
      />
    </section>
  );
}
