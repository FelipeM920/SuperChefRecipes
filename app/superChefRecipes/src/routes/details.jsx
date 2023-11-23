import DetailsPage from "../components/pages/details/index";
import { useLocation } from "react-router-dom";

export default function Details() {
  let { state } = useLocation();
  
  return <DetailsPage recipeDetails={state}></DetailsPage>;
}
