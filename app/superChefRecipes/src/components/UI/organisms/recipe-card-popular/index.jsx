import "./style.scss";
import RecipeImageWithTitle from "../../molecules/recipe-image-title";
import PropTypes from "prop-types";

RecipeCardPopular.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
};

export default function RecipeCardPopular(props) {
  const { cardTitle, imageSource } = props;

  return (
    <section className="recipe-card-popular">
      <RecipeImageWithTitle
        cardTitle={cardTitle}
        imageSource={imageSource}
      ></RecipeImageWithTitle>
    </section>
  );
}
