import "./style.scss";
import ImageHolder from "../../atoms/image-holder";
import FavoritesCount from "../../atoms/favorites-count";
import TimeToComplete from "../../atoms/time-to-complete";

export default function RecipeImageWithFavoritesAndTimeCount() {
  return (
    <section className="recipe-image-fav-time-count">
      <ImageHolder></ImageHolder>
      <div className="fav-time-count-wrapper">
        <FavoritesCount></FavoritesCount>
        <TimeToComplete></TimeToComplete>
      </div>
    </section>
  );
}
