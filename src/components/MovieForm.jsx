import { useState, useEffect } from "react";
import styles from "./MovieForm.module.css";
const MovieForm = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    genre: "",
    favorite: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addMovie(movie);

    setMovie({
      title: "",
      year: "",
      genre: "",
      favorite: false
    });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="year">Year: </label>
        <input
          type="text"
          name="year"
          value={movie.year}
          onChange={handleChange}
          required
        />
        <label htmlFor="genre">Genre: </label>
        <input
          type="text"
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MovieForm;
