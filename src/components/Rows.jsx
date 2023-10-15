import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import './Row.css';
function Rows({ title, fetchUrl,isposter}) {
  // console.log(fetchUrl);
  const [allMovies,setAllMovies]=useState([])
  const base_url = "https://image.tmdb.org/t/p/original/";
  const fetchData = async () => {
    const {data} = await tmdbAxiosInstance.get(fetchUrl);
    setAllMovies(data.results)
  };
  // console.log(allMovies);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="all_movies">
        {
        allMovies.map(item=>(
            <img className={`${isposter&&'movie_large'} movie`} src={`${base_url}/${isposter?item.poster_path:item.backdrop_path}`} alt="no-image" />
        ))
        }
      </div>
    </div>
  );
}

export default Rows;
