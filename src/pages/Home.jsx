import "../css/Home.css";
import Navbar from "../component/navbar";
import MovieCard from "../component/MovieCard";
import movies from "../data/movies";

function Home() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Netflix</h1>

        <div className="navLinks">
          <button>Home</button>
          <button>My Netflix</button>
        </div>
      </nav>

      <main className="homePage">
        <section className="heroSection">
          
        </section>

        <section className="moviesCard">
          <h2>Trending Now</h2>

          <div className="movieRow">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
