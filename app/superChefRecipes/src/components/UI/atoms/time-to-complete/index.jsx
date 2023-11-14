import "./style.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PropTypes from "prop-types";

TimeToComplete.propTypes = {
  timeToComplete: PropTypes.number.isRequired,
};

export default function TimeToComplete(props) {
  const { timeToComplete } = props;

  return (
    <section className="time-to-complete">
      <AccessTimeIcon color="primary"></AccessTimeIcon>
      <span>{timeToComplete} min</span>
    </section>
  );
}
