index.jsx
import React, { useState } from 'react';
import './index.css';

const NousContacter = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-container">
      <div className="stars"></div>
      
      <div className="contact-card">
        <h1 className="title">Transmission</h1>
        <p className="subtitle">Votre planète rencontre des soucis ? le service est là.</p>

        {submitted ? (
          <div className="success-message">
            <h2>Message propulsé...</h2>
            <p>Nos agents de liaison reviendront vers vous après la prochaine éclipse. ou jamais</p>
            <button onClick={() => setSubmitted(false)} className="btn">Nouvelle transmission</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <label>Identifiant Pilote</label>
              <input type="text" placeholder="Ex: Neil Armstrong" required />
            </div>

            <div className="input-group">
              <label>Coordonnées (Email)</label>
              <input type="email" placeholder="nom@galaxie.com" required />
            </div>

            <div className="input-group">
              <label>Sujet de la mission</label>
              <select>
                <option>Achat de Géante Gazeuse</option>
                <option>Problème de gravitation</option>
                <option>Service après-vente Astéroïdes</option>
                <option>Planète déja habitée</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Décrivez votre requête..." required></textarea>
            </div>

            <button type="submit" className="btn-submit">Envoyer la transmission</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NousContacter;