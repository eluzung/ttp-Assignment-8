import React from "react";

//This is the child component of Search and grandchild component of AppComponent
//<img src={props.images.original.url}></img>

const GifCard = (props) => {

  const loadGifArray = () => {
    return props.gifArray.map((gif, index) => {
      return (
        <div className="gif-array">
          <div key={index} className="gif-element">
            <img src={gif.images.fixed_height.url} className="gif-image" />
            <p className="gif-title">{gif.title}</p>
          </div>
        </div>
      );
    });
  };

  return <div>{loadGifArray()}</div>;
};

export default GifCard;
/*
<div className="gif">
      <a
        className="gif-card"
        href={props.url}
        target="_blank"
        rel="noreferrer"
      />
      <div className="video-container">
        <img
          src={props.imageSrc}
          className="gif-card-image"
        />
        <title>{props.title}</title>
      </div>
    </div>
    */
