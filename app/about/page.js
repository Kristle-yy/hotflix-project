import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="about-page">

        {/* HERO SECTION */}
        <div className="about-hero">

          <div className="about-overlay"></div>

          <div className="about-content">

            <span className="about-tag">
              HOTFLIX STUDIO
            </span>

            <h1>
              About HotFlix
            </h1>

            <p>
              HotFlix is a modern movie streaming platform where users
              can discover trending movies, explore new releases,
              and enjoy cinematic entertainment with beautiful UI design.
            </p>

            <div className="about-buttons">

              <Link href="/">
                <button className="about-btn">
                  Explore Movies
                </button>
              </Link>

              <Link href="/login">
                <button className="about-btn secondary">
                  Join Now
                </button>
              </Link>

            </div>

          </div>

        </div>

        {/* FEATURES */}
        <section className="about-features">

          <div className="feature-card">
            <h3>🎬 Trending Movies</h3>

            <p>
              Watch the latest blockbuster movies and top rated shows.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔥 Premium UI</h3>

            <p>
              Beautiful cinematic experience inspired by Netflix and Disney+.
            </p>
          </div>

          <div className="feature-card">
            <h3>📱 Responsive Design</h3>

            <p>
              Fully optimized for desktop, tablet, and mobile devices.
            </p>
          </div>

        </section>

        {/* GALLERY */}
        <section className="about-gallery">

          <h2>Featured Posters</h2>

          <div className="gallery-grid">

            <div className="gallery-card">
              <Image
                src="/ironman.png"
                alt="Movie"
                width={500}
                height={300}
              />
            </div>

            <div className="gallery-card">
              <Image
                src="/spiderman.png"
                alt="Movie"
                width={500}
                height={300}
              />
            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}