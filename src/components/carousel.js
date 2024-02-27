import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Datas/data.json";

function Carousel() {
  const { id } = useParams();
  // Filtrer les données du logement en fonction de l'identifiant
  const logement = data.find((logement) => logement.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="deplacement-img">
        <img
          className="previmage"
          src="/images/arrow_back_ios-24px1.png"
          alt="imgChevron"
          onClick={prevImage}
        />

        <img
          className="nextimage"
          src="/images/vector.png"
          alt="imgChevron"
          onClick={nextImage}
        />
      </div>
      <div className="content-img">
        <img
          className="img-carousel"
          src={logement.pictures[currentIndex]}
          alt={`logement.pictures ${currentIndex}`}
        />
      </div>
    </div>
  );
}

export default Carousel;
