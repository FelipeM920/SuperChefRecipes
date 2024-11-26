import "./style.scss";
import PropTypes from "prop-types";
import ImageHolder from "../../atoms/image-holder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

ShowCaseThreeItens.propTypes = {
  recipes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default function ShowCaseThreeItens(props) {
  const { recipes, title } = props;

  function handleShowStartRating() {
    return (
      <>
      {
        (() => {
          const arrStartRating = [];
          for (let i = 0; i < 5; i++) {
            arrStartRating.push(<FontAwesomeIcon key={i} icon={faStar} color="#ff642f" />)
          }
          return arrStartRating;
        })()
      }
      </>
    )
  }

  function handleShowCaseItem(recipe, index) {
    return (
      <div key={index} className="showCaseItem">
        <ImageHolder imageSource={recipe.images.REGULAR.url}></ImageHolder>
        <div className="starRating">
          {handleShowStartRating()}
        </div>
        <span className="recipeName">{recipe.label}</span>
      </div>
    )
  }

  return (
    <section className="showCaseThreeItens">
      <h2 className="title">{title}</h2>
      <div className="showCaseThreeItensBox">
        {recipes.map((item, index) => handleShowCaseItem(item.recipe, index))}
      </div>
    </section>
  );
}
