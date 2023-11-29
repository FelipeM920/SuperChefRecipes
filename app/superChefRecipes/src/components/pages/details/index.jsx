import "./style.scss";
import PropTypes from "prop-types";
import ImageHolder from "../../UI/atoms/image-holder";
import RecipeDetails from "../../UI/organisms/recipe-details";

Details.propTypes = {
  recipeDetails: PropTypes.object.isRequired,
};

export default function Details(props) {
  const { recipeDetails } = props.recipeDetails;
  console.log("teste", recipeDetails);
  return (
    <section className="details">
      <ImageHolder imageSource={recipeDetails.image} />
      <RecipeDetails
        duration={recipeDetails.totalTime}
        serving={recipeDetails.yield}
        calories={Math.ceil(recipeDetails.calories)}
        views="80"
        title={recipeDetails.label}
      />
    </section>
  );
}
