import { fetchMyAnimeListTop } from "@/actions/fetchMyAnimeListTop";
import { getAnimeEpisode } from "@/actions/getAnimeEpisode";
import AnimeCard from "@/components/AnimeCard";
import SearchBar from "@/components/SearchBar";
import { AnimeProp } from "@/type";

async function Home() {
  const anime = await fetchMyAnimeListTop();

  const animeData = await Promise.all(
    anime.data.map(async (item: AnimeProp) => {
      const ep = await getAnimeEpisode(item.mal_id);
      return { ...item, airedEp: ep };
    })
  );

  // const animeData = anime.data;

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <SearchBar />

      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <p className="text-neutral-400">This page shows the top 20 highest rated anime</p>

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
