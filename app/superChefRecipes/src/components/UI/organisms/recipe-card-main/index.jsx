import "./style.scss";
import PropTypes from "prop-types";
import ImageHolder from "../../atoms/image-holder";

RecipeCardMain.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default function RecipeCardMain(props) {
  const { recipe } = props.recipe;
  return (
    <div className="mainBox">
      <div className="detailsImage">
        <ImageHolder imageSource={recipe.images.LARGE.url}></ImageHolder>
      </div>
      <div className="detailsText">
        <span>85% would male this again</span>
        <span>Place holder title</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim unde,
          error veritatis ducimus veniam harum reiciendis odio nihil quos
          corrupti.
        </span>
      </div>
    </div>
  );
}
