"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    title: "Captain Marvel",
    rating: "6.9",
    desc: "KDHIUGDOLSKH",
    genre: "Adventure",
    image: "/Hero1.png",
  },
  {
    title: "The Avengers",
    rating: "7.5",
    desc: "A hero emerges from shadows to fight corruption and fear.",
    genre: "Action, Drama",
    image: "/Hero2.png", 
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[index].image})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          {slides[index].title}
          <span className="rating">{slides[index].rating}</span>
        </h1>

        <p>{slides[index].desc}</p>
        <p className="genre">{slides[index].genre}</p>

        <button className="watch-btn">WATCH NOW</button>
      </div>

      {/* arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
};

export default Hero;