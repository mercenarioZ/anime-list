import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import { AnimeProp } from "@/type";

interface Prop {
  anime: AnimeProp;
  index: number;
}

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function AnimeCard({ anime }: Prop) {
  return (
    <div className="relative w-full max-w-xs flex flex-col items-center justify-center bg-neutral-300/5 hover:bg-neutral-400/30 transition rounded-md p-3">
      <div className="relative cursor-pointer transition w-full rounded-md h-[28vh] overflow-hidden">
        <a
          target="_blank"
          href={anime.url}
        >
          {/* thumbnail */}
          <Image
            src={anime?.images?.jpg?.image_url}
            alt={anime.title}
            fill
            className="object-cover"
          />
        </a>
      </div>

      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.title}
          </h2>
        </div>

        {/* status */}
        <div>{anime.status}</div>

        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            {/* episode icon */}
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            {/* <p className="text-base text-white font-bold">{anime.airedEp}</p>/ */}
            <p className="text-base text-white font-bold">{anime.episodes}</p>
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
