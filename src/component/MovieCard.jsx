import '../css/MovieCard.css'
function MovieCard({movie}){
    return (
        <>
        <div className="movieCard">
            <img src={movie.image} alt={movie.title}></img>
            <h3>{movie.title}</h3>
        </div>
        </>
    )
}

export default MovieCard;