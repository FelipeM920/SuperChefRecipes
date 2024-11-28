import "./style.scss";
import logo from "../../../../assets/superchefrecipes-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footerContainer">
        <div className="logoContainer">
          <img src={logo} alt="Site Logo" className="siteLogo" />
          <p className="logoDescription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            at! Porro maxime dolor accusamus fuga.
          </p>
        </div>
        <div className="linkMenus">
          <div className="footerMenu">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Recipes</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footerMenu">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Recipes</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footerMenu">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Recipes</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="socialMediaContainer">
        <span className="copyRightsText">&copy; 2024 SuperChefRecipes - All rights reserved</span>
        <div className="socialMediaIcons">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
    </section>
  );
}
