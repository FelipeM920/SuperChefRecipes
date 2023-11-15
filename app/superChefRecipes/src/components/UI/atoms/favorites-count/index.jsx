import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function FavoritesCount() {
  return (
    <section className="favorites-count">
      <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
      <span>273</span>
    </section>
  );
}
