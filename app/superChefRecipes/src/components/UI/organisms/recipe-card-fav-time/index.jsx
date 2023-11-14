import "./style.scss";
import RecipeImageWithFavoritesAndTimeCount from "../../molecules/recipe-image-fav-time-count";
import PropTypes from "prop-types";

RecipeCardFavoriteAndTimeCount.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  timeToComplete: PropTypes.number.isRequired,
  imageSource: PropTypes.string,
};

export default function RecipeCardFavoriteAndTimeCount(props) {
  const { cardTitle, timeToComplete, imageSource } = props;

  return (
    <section className="recipe-card-fav-time">
      <RecipeImageWithFavoritesAndTimeCount
        timeToComplete={timeToComplete}
        imageSource={imageSource}
      ></RecipeImageWithFavoritesAndTimeCount>
      <span className="card-title">{cardTitle}</span>
    </section>
  );
}
