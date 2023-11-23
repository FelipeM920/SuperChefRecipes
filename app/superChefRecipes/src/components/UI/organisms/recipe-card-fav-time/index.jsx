import "./style.scss";
import RecipeImageWithFavoritesAndTimeCount from "../../molecules/recipe-image-fav-time-count";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

RecipeCardFavoriteAndTimeCount.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  timeToComplete: PropTypes.number.isRequired,
  imageSource: PropTypes.string,
  recipeDetails: PropTypes.object.isRequired,
};

export default function RecipeCardFavoriteAndTimeCount(props) {
  const { cardTitle, timeToComplete, imageSource, recipeDetails } = props;

  return (
    <Link to="/details" state={{recipeDetails}}>
      <section className="recipe-card-fav-time">
        <RecipeImageWithFavoritesAndTimeCount
          timeToComplete={timeToComplete}
          imageSource={imageSource}
        ></RecipeImageWithFavoritesAndTimeCount>

        <span className="card-title">{cardTitle}</span>
      </section>
    </Link>
  );
}
