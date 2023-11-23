import "./style.scss";
import { useLoaderData } from "react-router-dom";
import RecipeCardPopular from "../../UI/organisms/recipe-card-popular";
import SearchByCategories from "../../UI/organisms/search-category";
import RecipeCardFavoriteAndTimeCount from "../../UI/organisms/recipe-card-fav-time";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const { recipes } = useLoaderData();
  const favoriteRecipes = recipes.slice(0, 3);
  const popularRecipes = recipes.slice(4, 9);

  function handleSeggestionRecipes(value) {
    console.log(value);
    return (
      <SwiperSlide key={value.recipe.label}>
        <RecipeCardFavoriteAndTimeCount
          cardTitle={value.recipe.label}
          timeToComplete={value.recipe.totalTime}
          imageSource={value.recipe.image}
          recipeDetails={{
            image: value.recipe.image,
            label: value.recipe.label,
            yield: value.recipe.yield,
            totalTime: value.recipe.totalTime,
            calories: value.recipe.calories,
            mealType: value.recipe.mealType,
            cuisineType: value.recipe.cuisineType,
            dietLabels: value.recipe.dietLabels,
            digest: value.recipe.digest,
            dishType: value.recipe.dishType,
            ingredients: value.recipe.ingredients,
          }}
        ></RecipeCardFavoriteAndTimeCount>
      </SwiperSlide>
    );
  }

  function handlePopularRecipes(value) {
    return (
      <SwiperSlide key={value.recipe.label}>
        <RecipeCardPopular
          cardTitle={value.recipe.label}
          imageSource={value.recipe.image}
        ></RecipeCardPopular>
      </SwiperSlide>
    );
  }

  return (
    <section className="home">
      <div className="home-body">
        <div className="suggestions-slide">
          <span className="title">What i cook today?</span>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1.3}
            spaceBetween={20}
            loop={true}
          >
            {favoriteRecipes.length > 0 &&
              favoriteRecipes.map((value) => handleSeggestionRecipes(value))}
          </Swiper>
        </div>
        <div className="popular-slide">
          <span className="popular-title">Popular Recipes</span>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={2.3}
            spaceBetween={5}
            loop={true}
          >
            {popularRecipes.length > 0 &&
              popularRecipes.map((value) => handlePopularRecipes(value))}
          </Swiper>
        </div>
        <div className="search-categories-wrapper">
          <span className="title">Search By Categories</span>
          <SearchByCategories></SearchByCategories>
        </div>
      </div>
    </section>
  );
}
