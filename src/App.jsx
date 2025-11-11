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

  return (
    <div className="app-container">
      <MovieForm addMovie={handleAddMovie} />
      <MovieList movies={savedMovies} />
    </div>
  );
}

export default App;
