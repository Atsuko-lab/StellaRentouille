import React, { useState, useEffect } from 'react';
import './index.css';
import { getPlanets, getAsteroids, getSoleil } from '../../services';
import ModalInfo from '../ModalInfo';

const Marche = () => {
    const [planets, setPlanets] = useState([]);
    const [asteroids, setAsteroids] = useState([]);
    const [soleils, setSoleils] = useState([]);    
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false); 

    useEffect(() => {
        const fetchPlanets = async () => {
            const data = await getPlanets();
            setPlanets(data);
        };
        const fetchAsteroids = async () => {
            const data = await getAsteroids();
            setAsteroids(data);
        };
        const fetchSoleils = async () => {
            const data = await getSoleil();
            setSoleils(data);
        };
        fetchPlanets();
        fetchAsteroids();
        fetchSoleils();
    }, []);

    const selectItemHandler = (type, id) => {
        console.log(`Selected ${type} with id: ${id}`);
        switch (type) {
            case 'planet':
                setSelectedItem(planets.find(planet => planet.id === id));
                setModalVisible(true);
                break;
        }
    };
    if (planets.length=== 0) {
        return <div>Loading...</div>;
    }
   
    return (
        <div>
            {modalVisible && selectedItem && (
                <ModalInfo stellarObject={selectedItem} isVisible={modalVisible} onClose={() => setModalVisible(false)} />
            )}
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
                        <button onClick={() => selectItemHandler('planet', planet.id)}>Détails</button>
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
                {asteroids.map((asteroid) => (
                    <div key={asteroid.id} className="planet-card">
                        <img
                            src={asteroid.img}
                            alt={asteroid.nom}
                            className="planet-image"
                        />
                        <h2 className="planet-name">{asteroid.nom}</h2>
                        <h3 className='planet-price'>{asteroid.prix}</h3>
                        <h3 className="planet-state">{asteroid.state}</h3>
                        <p className="planet-info"><strong>Taille :</strong> {asteroid.taille_diametre_km} km</p>
                        <p className="planet-info"><strong>Vitesse :</strong> {asteroid.vitesse_km_s} km/s</p>
                    </div>
                ))}
                {soleils.map((soleil) => (
                    <div key={soleil.id} className="planet-card">
                        <img
                            src={soleil.img}
                            alt={soleil.nom}
                            className="planet-image"
                        />
                        <h2 className="planet-name">{soleil.nom}</h2>
                        <h3 className='planet-price'>{soleil.prix}</h3>
                        <h3 className="planet-state">{soleil.state}</h3>
                        <p className="planet-info"><strong>Taille :</strong> {soleil.taille_km} km</p>
                        <p className="planet-info"><strong>Type :</strong> {soleil.type}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
};

export default Marche;
