import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images: string[] = [
    "https://www.reliancedigital.in/medias/Lunch-Break-Sale-Banner-D-rev-1.jpg?context=bWFzdGVyfGltYWdlc3w5MTQ2OXxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaDEwLzEwMDA2ODA2MjMzMTE4LmpwZ3xlOGZkMmU5ZGFkMWE1ZWNhYWQ5YTg3MTFmMzUzZmNjYTBiYjk3MThkMzRkMmZkZDUyN2ZkNzM0MGQ3ZTU5Nzdh",
    "https://www.reliancedigital.in/medias/Pre-Monsoon-Sale-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MzYzNXxpbWFnZS9qcGVnfGltYWdlcy9oNmMvaDYyLzEwMDA2ODA1ODM5OTAyLmpwZ3w5N2Y1MmQxZjMwMDQ1YjEwMDUyODJhNTQ4MDRhOGM4NWU2MzQzNzUzZjFiNjQ5ZTA0NDEwMzdjODg5MTE1ZjFh",
    "https://www.reliancedigital.in/medias/Relience-Digital-New.jpg?context=bWFzdGVyfGltYWdlc3w2OTkyM3xpbWFnZS9qcGVnfGltYWdlcy9oN2MvaDMzLzEwMDA1MTAxODcxMTM0LmpwZ3w3MGRkNDE2YWVhMGQ0YTk1MWU1NzNhNGFlOGFkNTJiNjhjMWY0NTRkYjRmNjgwZTFlOTdlNjk4MmQ1MmMyM2Ix",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Slide every one second (1000 milliseconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  const nextSlide = (): void => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <button
        className="carousel-button carousel-button-left absolute top-1/3 transform -translate-y-1/4 left-2 bg-white shadow-md rounded-full p-2"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <img
        className="carousel-image w-full"
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
      <button
        className="carousel-button carousel-button-right absolute top-1/3 transform -translate-y-1/4 right-2 bg-white shadow-md rounded-full p-2"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
