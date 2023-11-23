import "./style.scss";
import PropTypes from "prop-types";

Details.propTypes = {
  recipeDetails: PropTypes.object.isRequired,
};

export default function Details(props) {
  const { recipeDetails } = props;

  return (
    <section className="details">
      <h1>details</h1>
    </section>
  );
}
