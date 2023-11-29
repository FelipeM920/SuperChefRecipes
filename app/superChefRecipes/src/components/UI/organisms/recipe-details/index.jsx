import "./style.scss";
import PropTypes from "prop-types";
import DishDetails from "../../molecules/dish-details";

RecipeDetails.propTypes = {
  duration: PropTypes.string,
  serving: PropTypes.string,
  calories: PropTypes.string,
  views: PropTypes.string,
  title: PropTypes.string,
};

export default function RecipeDetails(props) {
  const { duration, serving, calories, views, title } = props;

  return (
    <section className="recipe-details">
      <DishDetails
        duration={duration}
        serving={serving}
        calories={calories}
        views={views}
        title={title}
      />
    </section>
  );
}
