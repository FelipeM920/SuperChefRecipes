import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchHeader from "../../UI/organisms/search-header/index";
import RecipeCardPopular from "../../UI/organisms/recipe-card-popular";
import SearchByCategories from "../../UI/organisms/search-category";
import RecipeCardFavoriteAndTimeCount from "../../UI/organisms/recipe-card-fav-time";
import Footer from "../../UI/organisms/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  axios.defaults.baseURL = "http://localhost:5000"; //just for local tests
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    axios.get("/search").then((response) => {
      console.log(response);
      setFavoriteRecipes(response.data.slice(0, 3));
      setPopularRecipes(response.data.slice(4, 9));
    });
  }, []);

  function handleFavoriteRecipes(value) {
    return (
      <SwiperSlide key={value.recipe.label}>
        <RecipeCardFavoriteAndTimeCount
          cardTitle={value.recipe.label}
          timeToComplete={value.recipe.totalTime}
          imageSource={value.recipe.image}
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
      <SearchHeader></SearchHeader>
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
              favoriteRecipes.map((value) => handleFavoriteRecipes(value))}
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
      <div className="footer-wrapper">
        <Footer></Footer>
      </div>
    </section>
  );
}
