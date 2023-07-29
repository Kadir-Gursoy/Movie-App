import axios from "axios";
import React, { useEffect, useState } from "react";
const Main = () => {
  const API_KEY = "b1ad040c8b59ee92603839b9fbbe4adf";
  const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key="
  const [movies, setMovies] = useState([])
  const getData = async () => {
    try {
      const response = await axios(`${API_URL}${API_KEY}`)
      setMovies(response.data.results)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
console.log(movies);
  return (
    <main>
      <form action="" className="flex justify-center p-2" >
        <input type="search" placeholder="Search A Movie.." className="outline-none border w-4/12 mr-3 text-black text-lg" />
        <button type="submit">Search</button>
      </form>
      <div className="flex flex-wrap">
        {
          movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <img src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path }`} alt="" />
                <div className="bg-blue-700 py-5 text-white">
                  <h5>{movie?.title}</h5>
                </div>
                <div className="movie-over">
                  <h4>Overvieww</h4>
                  <p>{movie?.overview}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </main>);
};
export default Main;