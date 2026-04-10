
import './index.css';

const ModalInfo = ({ stellarObject, isVisible, onClose }) => {
  if (!isVisible || !stellarObject) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={stellarObject.img} alt={stellarObject.nom} className="modal-image" />
        <h2 className="modal-title">{stellarObject.nom}</h2>
        <span className={`modal-state ${stellarObject.state === 'Disponible' ? 'available' : 'unavailable'}`}>
          {stellarObject.state}
        </span>
        <p className="modal-price">{stellarObject.prix}</p>

        <div className="modal-details">
          {stellarObject.taille_km && (
            <p><strong>Taille :</strong> {stellarObject.taille_km} km</p>
          )}
          {stellarObject.taille_diametre_km && (
            <p><strong>Diamètre :</strong> {stellarObject.taille_diametre_km} km</p>
          )}
          {stellarObject.climat && (
            <p><strong>Climat :</strong> {stellarObject.climat}</p>
          )}
          {stellarObject.composition_atmosphere && (
            <p><strong>Atmosphère :</strong> {stellarObject.composition_atmosphere.join(', ')}</p>
          )}
          {stellarObject.duree_annee_jours && (
            <p><strong>Durée de l'année :</strong> {stellarObject.duree_annee_jours} jours</p>
          )}
          {stellarObject.distance_soleil_millions_km && (
            <p><strong>Distance au Soleil :</strong> {stellarObject.distance_soleil_millions_km} M km</p>
          )}
          {stellarObject.vitesse_km_s && (
            <p><strong>Vitesse :</strong> {stellarObject.vitesse_km_s} km/s</p>
          )}
          {stellarObject.type && (
            <p><strong>Type :</strong> {stellarObject.type}</p>
          )}
        </div>

        {stellarObject.state === 'Disponible' && (
          <button className="modal-rent-btn">Louer cet astre</button>
        )}
      </div>
    </div>
  );
};

export default ModalInfo;

        