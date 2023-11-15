import "./style.scss";
import logo from "../../../../assets/superchefrecipes-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <section className="navbar">
      <img src={logo} alt="Site Logo" className="siteLogo" />
      <span className="text">Taste the World, One Recipe at a Time!</span>
      <FontAwesomeIcon icon={faBars} />
    </section>
  );
}
