import React, { Component } from "react";
//transformation de la function Tetepage en class
class Tetepage extends Component {
  render() {
    const { imageUrl, customStyle, customH1, customCard } = this.props;

    return (
      <div className="content-accueil">
        <div className="img-accueil" style={customCard}>
          <h1 className="text-accueil" style={customH1}>
            Chez vous, partout et ailleurs
          </h1>
          <img
            className="photo-accueil"
            src={imageUrl}
            alt="img"
            style={customStyle}
          />
        </div>
      </div>
    );
  }
}

export default Tetepage;
