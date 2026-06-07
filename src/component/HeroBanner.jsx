import "../css/HeroBanner.css";
import { useEffect, useState } from "react";
import movies from "../data/movies";

// style={{ backgroundImage: `url(${movie.banner})` }}
function HeroBanner({ movie }) {
  const [showTrailer, setShowTrailer] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrailer(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <main
        className="hero-banner"
        
      >
        <section className="overlay">
          {/* <h1>{movie.title}</h1> */}
          {/* <p>{movie.description}</p> */}
          {!showTrailer ? (
            <img
              src={movie.banner}
              alt={movie.title}
              className="banner-image"
            ></img>
          ) : (
            // <button onClick={() => setShowTrailer(true)}>▶ Play</button>
            <video autoPlay muted loop playsInline className="banner-video">
              <source src={movie.trailer} type="video/mp4" />
            </video>
            // {showTrailer && (
            //   <div className="modal" onClick={() => setShowTrailer(false)}>
            //     <div className="model-content" onClick={(e) => e.stopPropagation()}>
            //       <iframe width="560" height="315" src="https://www.youtube.com/embed/9YNponERL3A?si=9DX0eDdtvO4UMgeM&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            //     </div>
            //   </div>
            // ))}
          )}
        </section>
      </main>
    </>
  );
}

export default HeroBanner;
