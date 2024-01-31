"use server";

import AnimeCard from "@/components/AnimeCard";
import { AnimeProp } from "@/type";

// fetch anime from shikimori (dau buoi re rach)
export const fetchAnime = async (pageNumber: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${pageNumber}&limit=8&order=ranked`
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard
      key={item.mal_id}
      anime={item}
      index={index}
    />
  ));
};

export const fetchMyAnimeListTop = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8`);

  const data = await response.json();

  return data;
};

export const getAnimeEpisode = async (id: number): Promise<number> => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`);

  const data = await response.json();

  return data.data.length;
}
