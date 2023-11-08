import "./style.scss";
import logo from "../../../../assets/superchefrecipes-logo.svg";

export default function Footer() {
  return (
    <section className="footer">
      <img src={logo} alt="Site Logo" className="siteLogo" />
    </section>
  );
}