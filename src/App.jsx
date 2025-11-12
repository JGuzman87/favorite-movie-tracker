import { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [savedMovies, setSavedMovies] = useState([]);
  useEffect(() => {
  
      const storedMovies = JSON.parse(localStorage.getItem("movie")) || [];


        setSavedMovies(storedMovies);

  }, []);

  const handleAddMovie = (newMovie) => {
    const movieID = { ...newMovie, id: crypto.randomUUID() };
    const updatedMovie = [...savedMovies, movieID];
    setSavedMovies(updatedMovie);
    localStorage.setItem("movie", JSON.stringify(updatedMovie));
  };

  const handleDelete = (id) => {
    const movieToDelete = savedMovies.filter((movie) => movie.id !== id );
    setSavedMovies(movieToDelete);
    localStorage.setItem('movie', JSON.stringify())
  }

  return (
    <div className="app-container">
      <MovieForm addMovie={handleAddMovie} />
      <MovieList movies={savedMovies} deleteMovie={handleDelete}/>
    </div>
  );
}

export default App;
