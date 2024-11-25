import "./style.scss";
import PropTypes from "prop-types";
import ImageHolder from "../../atoms/image-holder";

ShowCaseThreeItens.propTypes = {
  recipes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default function ShowCaseThreeItens(props) {
  const { recipes, title } = props;

  console.log('recipes', recipes)

  function handleShowCaseItem(recipe, index) {
    return (
      <div key={index} className="showCaseItem">
        <ImageHolder imageSource={recipe.images.SMALL.url}></ImageHolder>
      </div>
    )
  }

  return (
    <section className="showCaseThreeItens">
      <h2>{title}</h2>
      <div className="showCaseThreeItensBox">
        {recipes.map((item, index) => handleShowCaseItem(item.recipe, index))}
      </div>
    </section>
  );
}
