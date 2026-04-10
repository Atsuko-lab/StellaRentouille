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
        let item = null;
        switch (type) {
            case 'planet':
                item = planets.find(p => p.id === id);
                break;
            case 'asteroid':
                item = asteroids.find(a => a.id === id);
                break;
            case 'soleil':
                item = soleils.find(s => s.id === id);
                break;
        }
        if (item) {
            setSelectedItem(item);
            setModalVisible(true);
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
                    <div key={planet.id} className="planet-card" onClick={() => selectItemHandler('planet', planet.id)}>
                        <img
                            src={planet.img}
                            alt={planet.nom}
                            className="planet-image"
                        />
                        <h2 className="planet-name">{planet.nom}</h2>
                        <h3 className='planet-price'>{planet.prix}</h3>
                        <h3 className="planet-state">{planet.state}</h3>
                    </div>
                ))}
                {asteroids.map((asteroid) => (
                    <div key={asteroid.id} className="planet-card" onClick={() => selectItemHandler('asteroid', asteroid.id)}>
                        <img
                            src={asteroid.img}
                            alt={asteroid.nom}
                            className="planet-image"
                        />
                        <h2 className="planet-name">{asteroid.nom}</h2>
                        <h3 className='planet-price'>{asteroid.prix}</h3>
                        <h3 className="planet-state">{asteroid.state}</h3>
                    </div>
                ))}
                {soleils.map((soleil) => (
                    <div key={soleil.id} className="planet-card" onClick={() => selectItemHandler('soleil', soleil.id)}>
                        <img
                            src={soleil.img}
                            alt={soleil.nom}
                            className="planet-image"
                        />
                        <h2 className="planet-name">{soleil.nom}</h2>
                        <h3 className='planet-price'>{soleil.prix}</h3>
                        <h3 className="planet-state">{soleil.state}</h3>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    );
};

export default Marche;
