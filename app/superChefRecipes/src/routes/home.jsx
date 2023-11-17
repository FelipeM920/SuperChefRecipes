import HomePage from "../components/pages/home/index";
import GetRecipes from "../controllerers/home";

export default function Home() {
  return <HomePage></HomePage>;
}

export async function loader() {
  const recipes = await GetRecipes();
  return { recipes };
}
