import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Datas/data.json";

function Description() {
  const { id } = useParams();
  // Filtrer les données du logement en fonction de l'identifiant
  const logement = data.find((logement) => logement.id === id);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="description">
      <div className="description-title">
        <h2 className="">Description</h2>
        <div>
          <img
            className={`chevron ${isOpen ? "open" : ""}`}
            onClick={toggleDropdown}
            src="/images/chevron-haut.png"
            alt="imgChevron"
          />
        </div>
      </div>
      {isOpen && <p>{logement.description}</p>}
    </div>
  );
}

export default Description;
