import React from "react";
import "./Banner.css";
import { useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import { useEffect } from "react";
function Banner({ fetchUrl }) {
    const [Movie, setMovie] = useState({});
    const base_url = "https://image.tmdb.org/t/p/original/";
    const fetchData = async () => {
        const { data } = await tmdbAxiosInstance.get(fetchUrl);
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
    };
    console.log(Movie);
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div
            className="banner"
            style={{
                height: "600px",
                backgroundImage: `url(${base_url}/${Movie?.backdrop_path})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover"
            }}
        >
            <div className="banner_content">
                <h1>{Movie?.name}</h1>
                <h2>{Movie?.overview?.slice(0,300)}...</h2>
            </div>
        </div>
    );
}

export default Banner;
