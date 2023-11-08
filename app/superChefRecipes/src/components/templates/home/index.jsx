import "./style.scss";
import SearchHeader from "../../UI/organisms/search-header/index";
import RecipeCardFavoriteAndTimeCount from "../../UI/organisms/recipe-card-fav-time";
import RecipeCardPopular from "../../UI/organisms/recipe-card-popular";
import SearchByCategories from "../../UI/organisms/search-category";

export default function HomeTemplate() {
  return (
    <section className="home-template">
      <SearchHeader></SearchHeader>
      <div className="suggestions-slide">
        <span>What i cook today?</span>
        <RecipeCardFavoriteAndTimeCount></RecipeCardFavoriteAndTimeCount>
      </div>
      <div className="popular-slide">
        <span>Popular Recipes</span>
        <RecipeCardPopular></RecipeCardPopular>
      </div>
      <div className="search-categories-wrapper">
        <span>Search By Categories</span>
        <SearchByCategories></SearchByCategories>
      </div>
    </section>
  );
}
