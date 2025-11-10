import { useState } from "react";
import styles from "./MovieForm.module.css";
const MovieForm = ({ id }) => {

  const [movie, setMovie] = useState({
    id: id,
    title: "",
    year: "",
    genre: "",
    favorite: false
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setMovie((prev) => ({...prev, [name]: value}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(movie)
    setMovie({
      title: "",
      year: "",
      genre: "",
    });

  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" value={movie.title} onChange={handleChange} />
        <label htmlFor="year">Year: </label>
        <input type="text" name="year" value={movie.year} onChange={handleChange} />
        <label htmlFor="genre">Genre: </label>
        <input type="text" name="genre" value={movie.genre} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default MovieForm;
