//This is the Parent Component, data will be passed onto the child components, GifCard and Search
import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "../SearchField/SearchField";
import GifCard from "../GifCard/GifCard";

function AppComponent() {
  let api_KEY = "6kxE5ULxARowEDc35XrsqV7NVQMm5f0k";
  const [gifs, setGifs] = useState([]);
  const [searchGifs, setSearchGifs] = useState([]);
  const [random, setRandom] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    async function getTrendingGifs() {
      try {
        let trendingResults = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=${api_KEY}`
        );
        /*
        for (var i = 0; i < trendingResults.data.data.length; i++) {
          console.log(trendingResults.data.data[i]);
        }
*/
        setGifs(trendingResults.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getTrendingGifs();
  }, []);

  useEffect(() => {
    async function getRandomGif() {
      try {
        let randomResult = await axios.get(
          `http://api.giphy.com/v1/gifs/random?api_key=${api_KEY}`
        );

        setRandom(randomResult.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    getRandomGif();
  });

  const getSearchGifs = async (searchTerm, rating) => {
    if (searchTerm != "") {
      try {
        let searchResults = await axios.get(
          `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=${rating}&api_key=${api_KEY}`
        );

        setSearchGifs(searchResults.data.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="search">
        <Search
          searchArray={searchGifs}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          rating={rating}
          setRating={setRating}
          getSearch={getSearchGifs}
        />
      </div>
      <div className="trend-gifs">
        <h1>Trending Gifs!</h1>
        <GifCard gifArray={gifs} />
      </div>
    </div>
  );
}

export default AppComponent;

/*
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
*/
