import "../css/MovieCard.css";
import { useState } from "react";
function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false);

  let timer;

  const handleEnter = () => {
    timer = setTimeout(() => {
      setHovered(true);
    }, 1000);
  };

  const handleLeave = () => {
    clearTimeout(timer);
    setHovered(false);
  };
  return (
    <>
      <div
        className="movieCard"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <img src={movie.image} alt={movie.title}></img>
        {hovered && (
          <div className="moviePopup">
            <video src={movie.trailer} autoPlay muted loop />
            <div className="popup-info">
              <h3>{movie.title}</h3>
              <button>▶ Play</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieCard;
