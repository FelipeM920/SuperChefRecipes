import "./style.scss";
import ImageHolder from "../../atoms/image-holder";
import PropTypes from "prop-types";

RecipeImageWithTitle.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
};

export default function RecipeImageWithTitle(props) {
  const { cardTitle, imageSource } = props;

  return (
    <section className="recipe-image-title">
      <ImageHolder imageSource={imageSource}></ImageHolder>
      <div className="title">
        <span>{cardTitle}</span>
      </div>
    </section>
  );
}
