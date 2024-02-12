import { AnimeProp } from "@/type";
import clsx from "clsx";
import Image from "next/image";

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime }: Prop) {
  return (
    <div className="relative w-full max-w-xs flex flex-col items-center justify-center bg-neutral-300/10 hover:bg-neutral-400/20 transition rounded-md p-3">
      <div className="relative cursor-pointer transition w-full rounded-md h-[42vh] overflow-hidden">
        <a
          target="_blank"
          href={anime.url}
        >
          {/* thumbnail */}
          <Image
            src={anime?.images?.jpg?.image_url}
            alt={anime.title}
            className="object-fit"
            layout="fill"
          />
        </a>
      </div>

      <div className="py-4 flex flex-col gap-3 w-full items-center">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.title}
          </h2>
        </div>

        {/* status: airing, finished,... */}
        <div className="text-white">{anime.status}</div>

        <div className={clsx("flex items-center", anime.type === "TV" && "gap-3")}>
          <div className="flex justify-center items-center">
            {anime.type === "TV" && (
              <div className="flex">
                {/* episode icon */}
                <Image
                  src="./episodes.svg"
                  alt="episodes"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-base text-white font-bold">
                  {anime.airedEp >= 100 ? ">100" : anime.airedEp}
                </p>
                /
                <p className="text-base text-white font-bold">
                  {anime.episodes}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
