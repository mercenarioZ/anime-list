import { AnimeProp } from "@/type";
import Image from "next/image";

interface AnimeListItemProp {
  anime: AnimeProp;
  index: number;
}

const AnimeListItem: React.FC<AnimeListItemProp> = ({ anime, index }) => {
  return (
    <div className="text-white flex items-center gap-x-8 w-full px-10 py-4 rounded-md hover:bg-neutral-800 transition list-item-container">
      {/* rank number */}
      <div className="text-white w-6 flex justify-center items-center">
        <p className="font-bold text-3xl scale-on-hover">{index + 1}</p>
      </div>

      {/* thumbnail */}
      <div className="overflow-hidden relative min-h-[105px] min-w-[75px] rounded-md">
        <a
          href={anime.url}
          target="_blank"
        >
          <Image
            fill
            alt="Media Item"
            className="object-fit"
            src={anime?.images?.jpg?.image_url}
          />
        </a>
      </div>

      {/* name */}
      <div className="text-xl font-medium flex flex-1">{anime.title}</div>

      {/* rating (star) */}
      <div className="font-bold flex gap-x-3">
        <p>{anime.score}</p>
        <Image
          src="./star.svg"
          alt="star"
          width={18}
          height={18}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AnimeListItem;
