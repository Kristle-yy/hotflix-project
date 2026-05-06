"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    title: "Captain Marvel",
    rating: "6.9",
    desc: "A hero rises to protect the universe from powerful enemies.",
    genre: "Adventure",
    image: "/Hero1.png",
  },

  {
    title: "The Avengers",
    rating: "7.5",
    desc: "Earth's mightiest heroes unite to save the world.",
    genre: "Action, Drama",
    image: "/Hero2.png",
  },
];

const Hero = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SLIDE
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-content">

        <span className="movie-tag">
          NEW RELEASE
        </span>

        <h1>
          {slides[currentSlide].title}
        </h1>

        <div className="rating">
          {slides[currentSlide].rating}
        </div>

        <p>
          {slides[currentSlide].desc}
        </p>

        <h3 className="genre">
          {slides[currentSlide].genre}
        </h3>

        <div className="hero-buttons">

          <button className="watch-btn">
            Watch Now
          </button>


        </div>

      </div>
    </section>
  );
};

export default Hero;