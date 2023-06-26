import React, { useState } from "react";
import GifCard from "../GifCard/GifCard";

function Search(props) {
  //const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    const term = props.searchTerm;
    const rating = props.rating;

    console.log(term);
    console.log(rating);

    props.getSearch(term, rating);
    props.setSearchTerm("");
    props.setRating("");
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="form">
        <label>Search for any GIF!</label>
        <input
          className="search"
          type="text"
          placeholder="type anything..."
          value={props.searchTerm}
          onChange={(event) => props.setSearchTerm(event.target.value)}
        />
        <button type="submit">Submit</button>
        <div className="filter">
          <h3>Filter your search by selecting a rating!</h3>
          <div>
            <input
              className="rating"
              type="checkbox"
              id="g"
              value="g"
              onChange={(event) => props.setRating(event.target.value)}
            />
            <label for="g">G</label>
          </div>
          <div>
            <input
              className="rating"
              type="checkbox"
              id="pg"
              value="pg"
              onChange={(event) => props.setRating(event.target.value)}
            />
            <label for="pg">PG</label>
          </div>
          <div>
            <input
              className="rating"
              type="checkbox"
              id="pg-13"
              value="pg-13"
              onChange={(event) => props.setRating(event.target.value)}
            />
            <label for="pg-13">PG-13</label>
          </div>
          <div>
            <input
              className="rating"
              type="checkbox"
              id="r"
              value="r"
              onChange={(event) => props.setRating(event.target.value)}
            />
            <label for="r">R</label>
          </div>
        </div>
      </form>
      <GifCard gifArray={props.searchArray} />
    </div>
  );
}

export default Search;

/*
    <form onSubmit={props.getSearchGifs} className="form">
        <label>Search for any GIF!</label>
        <input
          type="text"
          placeholder="type anything..."
          value={searchTearm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
*/
