import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = ({movies}) => {



  const navigae = useNavigate
  return (
    <div>


{
          movies?.map((movie) => {
            return (
              <div key={movie.id} className="movie flex flex-wrap justify-center" onClik={()=>navigate(`/moviedetail/${movie.id}`)} >
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