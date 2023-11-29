import "./style.scss";
import PropTypes from "prop-types";
import FavoritesCount from "../../atoms/favorites-count";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faPeopleGroup,
  faWeightScale,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

DishDetails.propTypes = {
  duration: PropTypes.string,
  serving: PropTypes.string,
  calories: PropTypes.string,
  views: PropTypes.string,
  title: PropTypes.string,
};

export default function DishDetails(props) {
  const { duration, serving, calories, views, title } = props;

  return (
    <section className="dish-details">
      <div className="header">
        <span>{title}</span>
        <FavoritesCount />
      </div>
      <div className="details">
        <div className="details-icons">
          <FontAwesomeIcon icon={faClock} />
          <div className="details-text">
            <span>{duration}</span>
            <span>duration</span>
          </div>
        </div>
        <div className="details-icons">
          <FontAwesomeIcon icon={faPeopleGroup} />
          <div className="details-text">
            <span>{serving}</span>
            <span>serving</span>
          </div>
        </div>
        <div className="details-icons">
          <FontAwesomeIcon icon={faWeightScale} />
          <div className="details-text">
            <span>{calories}</span>
            <span>calories</span>
          </div>
        </div>
        <div className="details-icons">
          <FontAwesomeIcon icon={faEye} />
          <div className="details-text">
            <span>{views}</span>
            <span>views</span>
          </div>
        </div>
      </div>
    </section>
  );
}
