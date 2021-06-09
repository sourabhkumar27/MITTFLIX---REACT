import Movie from "./Movie";
import "../App.css";

const MovieContainer = ({ handleLikeMovie, likes, movies }) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Movies</h1>
        <div className="titles-wrapper">
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                handleLikeMovie={handleLikeMovie}
                likes={likes}
                model={movie}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
