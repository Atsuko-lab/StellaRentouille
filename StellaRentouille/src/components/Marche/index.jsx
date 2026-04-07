import React, { useState, useEffect } from 'react';
import './index.css';
import { getPlanets } from '../../services';

const Marche = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchPlanets = async () => {
            const data = await getPlanets();
            setPlanets(data);
        };
        fetchPlanets();
    }, []);

    if (planets.length=== 0) {
        return <div>Loading...</div>;
    }
   
    return (
        <div className="marche">
            <h1>Marché</h1>
            <p>Découvrez toutes nos offres</p>
            <div className="planets-grid">
                {planets.map((planet) => (
                    <div key={planet.id} className="planet-card">
                        <img
                            src={planet.img}
                            alt={planet.nom}
                            className="planet-image"
                        />
                        <h2 className="planet-name">{planet.nom}</h2>
                        <h3 className='planet-price'>{planet.prix}</h3>
                        <h3 className="planet-state">{planet.state}</h3>
                        <p className="planet-info"><strong>Taille :</strong> {planet.taille_km} km</p>
                        <p className="planet-info"><strong>Climat :</strong> {planet.climat}</p>
                        <p className="planet-info"><strong>Atmosphère :</strong> {planet.composition_atmosphere.join(', ')}</p>
                        <p className="planet-info"><strong>Durée de l'année :</strong> {planet.duree_annee_jours} jours</p>
                        <p className="planet-info"><strong>Distance au Soleil :</strong> {planet.distance_soleil_millions_km} millions km</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marche;
