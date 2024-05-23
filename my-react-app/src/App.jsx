import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//API KEY: a504f470
const API_URL = "http://www.omdbapi.com?apikey=a504f470";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies("Spider Man");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) =>  setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="Search" onClick={() => SearchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie1={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
