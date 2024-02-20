import React, { useState, useEffect } from "react";
import Tetepage from "../components/en-tete";
import Carder from "../components/article-accueil";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Utilisez require() pour charger le fichier JSON localement
    const jsonData = require("../Datas/data.json");
    setData(jsonData);
  }, []); // Utilise un tableau vide de dépendances pour exécuter cet effet une seule fois au montage

  return (
    <div>
      {/* tête de page image d'accueil */}
      <Tetepage
        title="Chez vous, partout et ailleurs"
        imageUrl="/images/IMG.png"
      />
      <section className="section">
        <div className="articles">
          {data.slice().map((article, index) => (
            <Carder key={index} image={article.cover} title={article.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
