import axios from "axios";

export default async function GetRecipes() {
  axios.defaults.baseURL = 'http://localhost:3000/' // remove for deploy!!!

  return await axios.get("/search").then((response) => {
    return response.data;
  });
}
