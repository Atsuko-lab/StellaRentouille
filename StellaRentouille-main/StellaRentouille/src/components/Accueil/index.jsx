import React from 'react';
import './index.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

function Accueil() {
  return (
    <main className="page-wrapper">
      <h1>Accueil - StellarRentouille</h1>
      
      <div className="container">
        <p className="text">« StellarRentouille est la plateforme de référence pour l'acquisition certifiée d'astres et de corps célestes. Parcourez notre catalogue galactique et devenez officiellement propriétaire d'une planète ou d'un astéroïde en quelques clics. »</p>
        <img className="image" src={image} alt="Univers" />
      </div>

      <div className="container">
        <p className="text">« Chaque achat inclut une jouissance exclusive de 99 ans, un certificat de propriété officiel et un relevé complet de la taille et des ressources de l'astre. Le prix est calculé selon la rareté géologique et la position orbitale de votre domaine. »</p>
        <img className="image" src={image2} alt="Planète Vénus" />
      </div>

      <div className="container">
        <p className="text">« Utilisez votre astre comme base de recherche scientifique, centre de stockage sécurisé ou comme un sanctuaire naturel préservé. C’est aussi le cadeau ultime pour immortaliser un nom parmi les étoiles pour les générations futures. »</p>
        <img className="image" src={image3} alt="Planète Saturne" />
      </div>
    </main>
  );
}

export default Accueil;