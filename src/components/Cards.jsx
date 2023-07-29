import React from 'react'

const Cards = ({movies}) => {
  return (
    <div>


{
          movies?.map((movie) => {
            return (
              <div key={movie.id} className="movie flex flex-wrap justify-center">
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
  )
}

export default Cards