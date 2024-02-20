import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CarouselPage() {
  const { imageIndex } = useParams();
  const [currentIndex, setCurrentIndex] = useState(
    parseInt(imageIndex, 10) || 0
  );

  const [images, setImages] = useState(null);

  // Implémentez ici la logique pour faire défiler les images en avant
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Implémentez ici la logique pour faire défiler les images en arrière
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Récupérer les images à partir de l'état local
    const selectedPictures = images && images[currentIndex];
    // Mise à jour du titre de la page avec le titre de l'image sélectionnée
    document.title = selectedPictures && selectedPictures.title;
  }, [currentIndex, images]);

  useEffect(() => {
    // Récupérer les données d'images passées via React Router
    const locationImages = JSON.parse(localStorage.getItem("images")); // suppose que les données d'images sont stockées dans le local storage
    setImages(locationImages);
  }, []);

  return (
    <div>
      <div>
        <button onClick={prevImage}>Précédent</button>
        {/* Utilisez currentIndex pour afficher l'image actuelle */}
        <img
          src={images && images[currentIndex].url}
          alt={images && images[currentIndex].title}
        />
        <button onClick={nextImage}>Suivant</button>
      </div>
    </div>
  );
}

export default CarouselPage;
