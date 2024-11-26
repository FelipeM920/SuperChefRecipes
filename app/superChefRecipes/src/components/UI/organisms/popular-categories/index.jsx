import "./style.scss";
import ImageHolder from "../../atoms/image-holder";

export default function PopularCategories() {

  const categoriesNames = ['Pasta', 'Pizza', 'Vegan', 'Desserts', 'Smoothies', 'Breakfast'];

  function handlePopularCategories() {
    return (
      <>
      {
        (() => {
          const arrCategories = [];
          for (let i = 0; i < 6; i++) {
            arrCategories.push(
              <div key={i} className="categoryItem">
                <ImageHolder />
                <span className="categoryName">{categoriesNames[i]}</span>
              </div>
            )
          }
          return arrCategories;
        })()
      }
      </>
    )
  }

  return (
    <section className="popularCategories">
      <span className="title">Popular Categories</span>
      <div className="categoriesList">
        {handlePopularCategories()}
      </div>
    </section>
  )
}