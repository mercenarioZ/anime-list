import AnimeCard from "@/components/AnimeCard";
import { fetchMyAnimeListTop, getAnimeEpisode } from "./action";
import SearchBar from "@/components/SearchBar";
import { AnimeProp } from "@/type";

async function Home() {
  const anime = await fetchMyAnimeListTop();
  // const airedEp = await getAnimeEpisode(animeData.mal_id);

  const animeData = anime.data;

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <SearchBar />

      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {animeData.map((item: AnimeProp, index: number) => (
          <AnimeCard
            key={item.mal_id}
            anime={item}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
