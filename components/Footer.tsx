import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2024 AnimeList</p>

      <div className="flex items-center gap-4 text-white">
        {/* <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        /> */}

        <a
          className="flex items-center gap-2"
          href="https://www.instagram.com/vu.le1352/"
          target="_blank"
        >
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
          <p>vu.le1352</p>
        </a>

        {/* <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        /> */}
      </div>
    </footer>
  );
}

export default Footer;
