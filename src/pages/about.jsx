import React from "react";
import Tetepage from "../components/en-tete";
import Dropdown from "../components/dropdown";
function About() {
  const customStyle = {
    filter: "none",
  };

  const customH1 = {
    zIndex: "0",
  };

  const customCard = {
    borderRadius: "10px",
  };

  return (
    <div>
      <Tetepage
        imageUrl="/images/apropo.png"
        customStyle={customStyle}
        customH1={customH1}
        customCard={customCard}
      />
      <section className="section-dropdown">
        <div>
          <Dropdown
            title="Fiabilité"
            chevronUrl="/images/chevron-haut.png"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et tputes les informations sont régulèrement vérifiées par nos équipes."
          />
        </div>

        <div>
          <Dropdown
            title="Respect"
            chevronUrl="/images/chevron-haut.png"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div>
          <Dropdown
            title="service"
            chevronUrl="/images/chevron-haut.png"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div>
          <Dropdown
            title="Sécurité"
            chevronUrl="/images/chevron-haut.png"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à la hôte qu'au locataire, cela permet 
            à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atelier sur la sécurité
            domestique pour nos hôtes.  "
          />
        </div>
      </section>
    </div>
  );
}

export default About;
