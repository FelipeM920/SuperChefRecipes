import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faLeaf,
  faDna,
  faBreadSlice,
  faArrowDownWideShort,
  faCube,
  faMugSaucer,
  faUtensils,
  faDrumstickBite,
  faCookieBite,
  faMugHot,
  faIceCream,
} from "@fortawesome/free-solid-svg-icons";

export default function SearchByCategories() {
  /*filter in order: balanced, high-fiber, high-protein, low-carb, low-fat, low-sodium,
     breakfast, dinner, lunch, snack, teatime, dessert*/
  return (
    <section className="search-categories">
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faScaleBalanced} /> 
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faLeaf} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faDna} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faBreadSlice} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faArrowDownWideShort} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faCube} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faMugSaucer} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faDrumstickBite} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faCookieBite} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faMugHot} />
      </div>
      <div className="search-type-icon">
        <FontAwesomeIcon icon={faIceCream} />
      </div>
    </section>
  );
}
