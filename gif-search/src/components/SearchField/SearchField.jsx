import React, { useState } from "react";
import GifCard from "../GifCard/GifCard";

function Search(props) {
  //const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    const term = props.searchTerm;

    props.getSearch(term);
    props.setSearchTerm("");
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="form">
        <label>Search for any GIF!</label>
        <input
          type="text"
          placeholder="type anything..."
          value={props.searchTerm}
          onChange={(event) => props.setSearchTerm(event.target.value)}
        />
        <button type="submit">Submit</button>
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
