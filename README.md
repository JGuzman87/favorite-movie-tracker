🎬 React Challenge: Favorite Movies Tracker

📘 Overview

Build a small React app that allows users to add and manage their favorite movies.
You’ll practice state management, component composition, controlled forms, and localStorage persistence — all key intermediate React skills.

🧩 Core Objectives
	1.	Add movies (title, release year, and genre) through a form.
	2.	Display movies in a list.
	3.	Mark movies as favorites with a toggle button.
	4.	Persist movie data in localStorage so it remains after page refresh.

    🧱 Project Structure

    src/
│
├── components/
│   ├── MovieForm.jsx      # Handles adding new movies
│   ├── MovieList.jsx      # Displays the list of movies
│   └── MovieItem.jsx      # Renders individual movie cards
│
└── App.jsx                # Root component managing state and storage
🧠 Features & Requirements

🎥 1. Add Movies
	•	Use a controlled form with inputs for title, year, and genre.
	•	On submission, create a movie object like:
    {
  id: 1,
  title: "Inception",
  year: 2010,
  genre: "Sci-Fi",
  favorite: false
}

	•	Append the new movie to state and save it to localStorage.

⸻

⭐ 2. Mark as Favorite
	•	Add a “Favorite” button in each movie card.
	•	Toggling it should update the favorite field and re-render the list.

⸻

💾 3. Persist with Local Storage
	•	Use useEffect to load saved movies on mount:
    useEffect(() => {
  const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
  setMovies(savedMovies);
}, []);

	•	And to save changes automatically when the movies array updates:
    useEffect(() => {
  localStorage.setItem("movies", JSON.stringify(movies));
}, [movies]);


⸻

🧮 4. Derived State

Add functionality to:
	•	Filter: “Show Favorites Only”
	•	Sort: Alphabetically by title
	•	(Optional) Edit a movie’s details

⸻

💡 What You’ll Practice
	•	Controlled inputs with useState
	•	Prop drilling and lifting state up
	•	Array manipulation (map, filter, sort)
	•	useEffect for side effects
	•	LocalStorage for persistence
	•	Component composition

⸻

🚀 Stretch Goals
	•	Add an “Edit Movie” option.
	•	Use icons (like ⭐ and 🗑️) instead of buttons.
	•	Style the app with Tailwind or CSS Modules.
	•	Display the total count of movies and favorites.

⸻

🧰 Suggested Tools
	•	React + Vite (recommended for fast setup)
	•	Tailwind CSS or DaisyUI for styling
	•	UUID or Date.now() for unique IDs