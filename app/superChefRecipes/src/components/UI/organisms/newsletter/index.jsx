import "./style.scss";
import PropTypes from "prop-types";
import InputWithButton from "../../molecules/input-with-button";

Newsletter.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Newsletter(props) {
  const {
    title,
    description,
    inputPlaceHolder,
    buttonLabel,
    buttonColor,
    onClick,
  } = props;

  return (
    <section className="newsletter">
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      <InputWithButton
        inputPlaceHolder={inputPlaceHolder}
        buttonLabel={buttonLabel}
        buttonColor={buttonColor}
        onClick={onClick}
      />
    </section>
  );
}
