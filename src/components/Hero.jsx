function Hero() {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            srcSet={imageSrc.replace(/\?.*$/, "") + "?fm=webp&q=86&w=1928"}
            type="image/webp"
          />
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            className="object-cover w-full h-[65vh] sm:h-[75vh] md:h-[85vh]"
          />
        </picture>

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to transparent"
          aria-hidden
        />
      </div>
    </header>
  );
}

export default Hero;
