import "./style.scss";
import PropTypes from "prop-types";

InputWithButton.propTypes = {
  inputPlaceHolder: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function InputWithButton(props) {
  const { inputPlaceHolder, buttonLabel, buttonColor, onClick } = props;

  return (
    <section className="inputWithButton">
      <input className="inputCustom" type="text" placeholder={inputPlaceHolder} />
      <button className="buttonCustom" style={{ backgroundColor: buttonColor }} onClick={onClick}>
        {buttonLabel}
      </button>
    </section>
  );
}
