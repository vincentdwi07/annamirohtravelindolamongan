import { useEffect, useState } from "react";

const images = [
  { src: "./user/mekkah.png", className: "mekkah-img" },
  { src: "./user/madinah.png", className: "madinah-img" },
  { src: "./user/masjid.png", className: "masjid-img" },
];

export default function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          className={`carousel-image ${img.className} ${
            index === activeIndex ? "activeImg" : ""
          }`}
        />
      ))}
    </>
  );
}
