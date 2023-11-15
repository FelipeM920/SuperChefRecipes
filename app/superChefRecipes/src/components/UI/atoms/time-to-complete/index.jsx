import "./style.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

TimeToComplete.propTypes = {
  timeToComplete: PropTypes.number.isRequired,
};

export default function TimeToComplete(props) {
  const { timeToComplete } = props;

  return (
    <section className="time-to-complete">
      <FontAwesomeIcon icon={faClock} />
      <span>{timeToComplete} min</span>
    </section>
  );
}
