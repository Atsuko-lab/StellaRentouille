
import './index.css';

const ModalInfo = ({ stellarObject, isVisible, onClose }) => {
if (isVisible) {
    return (
        <div className="modal-overlay" onClick={onClose}>       
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{stellarObject.nom}</h2>
                <img src={stellarObject.img} alt={stellarObject.nom} className="modal-image" />                         
            </div>
        </div>
    );
}
return null;
}
export default ModalInfo;

        