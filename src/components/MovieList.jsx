import styles from "./MovieList.module.css";
const MovieList = ({movies, deleteMovie}) => {


  return (
    <>
      {movies.length > 0 &&
        movies.map((movie) => (
          <div className={styles.list}>
            <div key={movie.id}>
              <p>{movie.title}</p>
              <p>{movie.year}</p>
              <p>{movie.genre}</p>
              <button type="button" onClick={() => deleteMovie(movie.id)}>Delete</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default MovieList;
