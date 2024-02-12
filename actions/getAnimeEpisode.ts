export const getAnimeEpisode = async (id: number): Promise<number> => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`);

  const data = await response.json();

  return data.data?.length as number;
};
