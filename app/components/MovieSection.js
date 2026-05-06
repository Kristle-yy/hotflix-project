const movies = [
  {
    title: "Iron Man",
    genre: "Action",
    rating: "9.4",
    image: "/ironman.png",
  },

  {
    title: "Batman",
    genre: "Adventure",
    rating: "9.5",
    image: "/batman.png",
  },

  {
    title: "Spider Man",
    genre: "Sci-Fi",
    rating: "9.1",
    image: "/spiderman.png",
  },

  {
    title: "Captain America",
    genre: "Drama",
    rating: "9.9",
    image: "/captain.png",
  },
];

const MovieSection = () => {
  return (
    <section className="movie-section">

      <div className="movie-title">
        <div>
          <h2>Trending Movies</h2>
          <p>Watch the latest blockbuster movies</p>
        </div>
      </div>

      <div className="movie-grid">

        {movies.map((movie, index) => (

          <div className="movie-card" key={index}>

            <img
              src={movie.image}
              alt={movie.title}
            />

            {/* RATING */}
            <div className="movie-rating">
              {movie.rating}
            </div>

            {/* OVERLAY */}
            <div className="movie-overlay">

              <h3>{movie.title}</h3>

              <p>
                Watch the newest trending movie now and enjoy cinematic experience.
              </p>

              <div className="movie-genre">
                {movie.genre}
              </div>

              <button className="movie-btn">
                Watch Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default MovieSection;