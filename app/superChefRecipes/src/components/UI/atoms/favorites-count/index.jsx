import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function FavoritesCount() {
  return (
    <section className="favorites-count">
      <FontAwesomeIcon className="favorites-count-icon" icon={faBookmark}></FontAwesomeIcon>
      <span className="favorites-count-text">273</span>
    </section>
  );
}
