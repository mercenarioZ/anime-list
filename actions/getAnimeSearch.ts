import axios from "axios";

export async function getAnimeSearch(query: string) {
  const response = await axios.get(`https://api.jikanmoe/v4/anime?q=${query}`);

  console.log(response.data);

  return response.data;
}
