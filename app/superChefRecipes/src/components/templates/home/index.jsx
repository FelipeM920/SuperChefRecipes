import "./style.scss";
import SearchHeader from "../../UI/organisms/search-header/index";
import RecipeCardFavoriteAndTimeCount from "../../UI/organisms/recipe-card-fav-time";

export default function HomeTemplate() {
  return (
    <section className="home-template">
      <SearchHeader></SearchHeader>

      <div className="suggestions-slide">
        <span>What i cook today?</span>
        <RecipeCardFavoriteAndTimeCount></RecipeCardFavoriteAndTimeCount>
      </div>
    </section>
  );
}
