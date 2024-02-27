import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Datas/data.json";

function Equipement() {
  const { id } = useParams();
  // Filtrer les données du logement en fonction de l'identifiant
  const logement = data.find((logement) => logement.id === id);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="equipement">
      <div className="equipement-title">
        <h2 className="">Equipement</h2>
        <div
          className={`chevron ${isOpen ? "open" : ""}`}
          onClick={toggleDropdown}
        >
          <span>
            <img src="/images/chevron-haut.png" alt="imgChevron" />
          </span>
        </div>
      </div>
      {isOpen && (
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Equipement;
