import axios from "axios";

export default async function GetRecipes() {
  axios.defaults.baseURL = "http://localhost:3000/"; //for test

  return await axios.get("/search").then((response) => {
    return response.data;
  });
}
