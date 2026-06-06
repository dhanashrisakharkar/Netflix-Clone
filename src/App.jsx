import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieCard from "./component/MovieCard.jsx";
import movies from "./data/movies.js";
import SearchBar from "./component/SearchBar.jsx";
import { useState } from "react";
import { filterMovie } from "./utils/movieHelper.js";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";

function App() {
  const [search, setSearch] = useState("");
  const result = useState("");
  const moviesList = filterMovie(movies, search);

  return (
    <>
      {/* <Navbar />
      <h1>{result}</h1>
      <SearchBar search={search} setSearch={setSearch} />
      {moviesList.length === 0 && <h2>No Movies Found</h2>}
      {moviesList.map((movie, index) => {
        return <MovieCard key={index} title={movie.title} year={movie.year} />;
      })} */}
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
