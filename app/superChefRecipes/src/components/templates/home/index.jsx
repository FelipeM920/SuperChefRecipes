import "./style.scss";
import SearchHeader from "../../UI/organisms/search-header/index";
import RecipeCardPopular from "../../UI/organisms/recipe-card-popular";
import SearchByCategories from "../../UI/organisms/search-category";
import RecipeCardFavoriteAndTimeCount from "../../UI/organisms/recipe-card-fav-time";
import Footer from "../../UI/organisms/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HomeTemplate() {
  return (
    <section className="home-template">
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
            <SwiperSlide>
              <RecipeCardFavoriteAndTimeCount></RecipeCardFavoriteAndTimeCount>
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCardFavoriteAndTimeCount></RecipeCardFavoriteAndTimeCount>
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCardFavoriteAndTimeCount></RecipeCardFavoriteAndTimeCount>
            </SwiperSlide>
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
            <SwiperSlide>
              <RecipeCardPopular></RecipeCardPopular>
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCardPopular></RecipeCardPopular>
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCardPopular></RecipeCardPopular>
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCardPopular></RecipeCardPopular>
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCardPopular></RecipeCardPopular>
            </SwiperSlide>
            <SwiperSlide>
              <RecipeCardPopular></RecipeCardPopular>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="search-categories-wrapper">
          <span>Search By Categories</span>
          <SearchByCategories></SearchByCategories>
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer></Footer>
      </div>
    </section>
  );
}
