import React from "react";

function Tetepage(props) {
  return (
    <div className="content-accueil">
      <div className="img-accueil">
        <h1 className="text-accueil">{props.title}</h1>
        <img className="photo-accueil" src={props.imageUrl} alt="photos" />
      </div>
    </div>
  );
}
export default Tetepage;
