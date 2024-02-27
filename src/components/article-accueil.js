import React from "react";
import { Link } from "react-router-dom";

function Carder(props) {
  return (
    <Link to={`../accommodation/${props.id}`}>
      <article className="card">
        <img className="img-article" src={props.image} alt="images" />
        <h2 className="title-article">{props.title}</h2>
      </article>
    </Link>
  );
}

export default Carder;
