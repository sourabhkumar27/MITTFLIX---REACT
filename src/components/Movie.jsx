import "../App.css";

const Movie = ({ handleLikeMovie, likes, model: movie }) => {
  const basePosterURL = "https://image.tmdb.org/t/p/w500/";
  const imageNotFound = "/image-not-available.jpg";
  const id = movie.id;
  const poster = movie.poster_path;
  const title = movie.title;
  const plot = movie.overview;
  const voteAverage = movie.vote_average;

  const getRating = () => {
    return voteAverage + "/10";
  };

  const ifLiked = () => {
    return likes.length === 0 ? "false" : "" + likes.includes(id);
  };

  const getPoster = () => {
    return poster === null ? imageNotFound : basePosterURL + poster;
  };

  return (
    <div className="movie">
      <img src={getPoster()} alt="Movie poster" />
      <div className="overlay">
        <div className="title">{title}</div>
        <div className="rating">{getRating()}</div>
        <div className="plot">{plot}</div>
        <div
          data-toggled={ifLiked()}
          className="listToggle"
          onClick={() => handleLikeMovie(id)}
        >
          <div>
            <i className="far fa-heart"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
