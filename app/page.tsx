import { fetchMyAnimeListTop } from "@/actions/fetchMyAnimeListTop";
import { getAnimeEpisode } from "@/actions/getAnimeEpisode";
import AnimeListItem from "@/components/AnimeListItem";
import SearchBar from "@/components/SearchBar";
import { AnimeProp } from "@/type";
import { useState } from "react";

async function Home() {
  const anime = await fetchMyAnimeListTop();

  const animeData = await Promise.all(
    anime.data.map(async (item: AnimeProp) => {
      const ep = await getAnimeEpisode(item.mal_id);
      return { ...item, airedEp: ep };
    })
  );

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 text-white">
      <SearchBar />

      {/* big title */}
      <div className="text-5xl text-white font-bold">Explore Anime</div>

      <div className="text-neutral-400">
        <p className="mb-4">
          This page shows the top 25 highest rated anime all of time
        </p>
        <p>
          For more information about a specific anime, click on its thumbnail to
          go to the official website -{" "}
          <span className="font-bold">MyAnimeList</span>
        </p>
      </div>

      <section className="flex flex-col gap-y-4">
        {animeData.map((item: AnimeProp, index: number) => (
          <AnimeListItem
            index={index}
            key={item.mal_id}
            anime={item}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
