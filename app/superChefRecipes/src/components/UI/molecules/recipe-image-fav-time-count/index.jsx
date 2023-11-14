import "./style.scss";
import ImageHolder from "../../atoms/image-holder";
import FavoritesCount from "../../atoms/favorites-count";
import TimeToComplete from "../../atoms/time-to-complete";
import PropTypes from "prop-types";

RecipeImageWithFavoritesAndTimeCount.propTypes = {
  timeToComplete: PropTypes.number.isRequired,
  imageSource: PropTypes.string,
};

export default function RecipeImageWithFavoritesAndTimeCount(props) {
  const { timeToComplete, imageSource } = props;

  return (
    <section className="recipe-image-fav-time-count">
      <ImageHolder imageSource={imageSource}></ImageHolder>
      <div className="fav-time-count-wrapper">
        <FavoritesCount></FavoritesCount>
        <TimeToComplete timeToComplete={timeToComplete}></TimeToComplete>
      </div>
    </section>
  );
}
