export const fetchMyAnimeListTop = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime`);

  const data = await response.json();

  return data;
};
