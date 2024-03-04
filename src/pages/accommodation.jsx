

import React from "react";
import { useParams } from "react-router-dom";
import data from "../Datas/data.json";
import Carousel from "../components/carousel";
import Equipement from "../components/equipement";
import Description from "../components/description";
function Accomodation() {
    const { id } = useParams();
     // Filtrer les données du logement en fonction de l'identifiant
    const logement = data.find((logement) => logement.id === id);

     // Fonction pour afficher les étoiles en fonction de la notation
     const afficherEtoiles = (rating) => {
        const nombreEtoiles = Math.min(parseInt(rating, 10), 5); // Limitez le nombre d'étoiles à 5
        const etoiles = [];
        for (let i = 0; i < 5; i++) {
          // Ajoutez la classe 'etoile-remplie' si l'indice est inférieur à la notation
          // Ajoutez la classe 'etoile-vide' sinon
          const classeEtoile = i < nombreEtoiles ? 'etoile-remplie' : 'etoile-vide';
          etoiles.push(<span key={i} className={classeEtoile}>&#9733;</span>); // Utilisation de l'entité Unicode pour une étoile pleine
        }
        return etoiles;
      };
        
    return (
        <div>
            <section>
                <Carousel/>
                <div className="content-logement">
                    <div className="logement">
                        <div className="logement-title">
                        <h2>{logement.title}</h2>
                        <p className="location">{logement.location}</p>
                        </div>
                        <div className="detail-logement">
                            <ul>
                                {logement.tags.map((tag, index)=>(
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>                
                        </div>
                    </div>
                    <div className="col1">
                        <div className="hote">
                            <p className="name-hote">{logement.host.name}</p>
                            <img className="hote-img" src={logement.host.picture} alt={logement.host.picture}/>
                        </div>
                        <div className="hote-etoile">
                            <span className="etoile">{afficherEtoiles(logement.rating)}</span>
                        </div>
                    </div>
                </div>
               
                <div className="content-liste">
                    <div className="content-description">
                        <Description/>
                    </div>
                    <div className="content-equipement">
                        <Equipement/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Accomodation;