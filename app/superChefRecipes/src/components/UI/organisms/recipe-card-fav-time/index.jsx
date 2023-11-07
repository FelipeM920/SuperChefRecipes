import "./style.scss";
import RecipeImageWithFavoritesAndTimeCount from "../../molecules/recipe-image-fav-time-count";

export default function RecipeCardFavoriteAndTimeCount () {
  return (
    <section className="recipe-card-fav-time">
        <RecipeImageWithFavoritesAndTimeCount></RecipeImageWithFavoritesAndTimeCount>
        <span>Tomato Pasta</span>
    </section>
  );
}