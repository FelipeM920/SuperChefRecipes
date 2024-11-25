import "./style.scss";
import logo from "../../../../assets/superchefrecipes-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <section className="navbar">
      <div className="logoWrapper">
        <img src={logo} alt="Site Logo" className="siteLogo" />
      </div>
      <div className="navigationOptions">
        <span className="text">Homepage</span>
        <span className="text">Recipe Page</span>
        <span className="text">Pages</span>
        <span className="text">Buy</span>
      </div>
      <div className="navigationLeftOptions">
        <span>Search Icon</span>
        <span>User Image</span>
      </div>
      <FontAwesomeIcon className="BarsIcon" icon={faBars} />
    </section>
  );
}
