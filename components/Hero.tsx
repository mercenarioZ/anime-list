function Hero() {
  return (
    <header className="bg-hero bg-opacity-70 bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="hover:scale-110 transition sm:text-6xl text-5xl text-neutral-700 lg:max-w-lg font-bold leading-[110%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center"></div>
    </header>
  );
}

export default Hero;
