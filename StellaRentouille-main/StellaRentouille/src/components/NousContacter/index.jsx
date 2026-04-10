import React, { useState, useRef} from 'react';
import './index.css';

const NousContacter = () => {
  const [submitted, setSubmitted] = useState(false);

  // 🏃 Bug 1 : bouton qui fuit
  const [btnPos, setBtnPos] = useState({ x: null, y: null });
  const btnRef = useRef(null);
  const formRef = useRef(null);

  const handleBtnHover = () => {
    if (!formRef.current || !btnRef.current) return;
    const formRect = formRef.current.getBoundingClientRect();
    const btnW = btnRef.current.offsetWidth;
    const btnH = btnRef.current.offsetHeight;
    const maxX = formRect.width - btnW;
    const maxY = formRect.height - btnH;
    setBtnPos({
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    });
  };

  // 💣 Bug 2 : backspace efface tout le champ
  const handleNuclearBackspace = (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      e.target.value = '';
      // Pour les inputs React controllés, on force via nativeInputValueSetter
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype, 'value'
      )?.set || Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, 'value'
      )?.set;
      if (nativeInputValueSetter) {
        nativeInputValueSetter.call(e.target, '');
        e.target.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  };

  // 🌀 Bug 3 : espace = rotation de la page
  const [rotation, setRotation] = useState(0);
  const handleSpaceRotate = (e) => {
    if (e.key === ' ') {
      setRotation(prev => prev + 73);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setBtnPos({ x: null, y: null });
    setRotation(0);
  };

  const btnStyle = btnPos.x !== null ? {
    position: 'absolute',
    left: btnPos.x,
    top: btnPos.y,
    transition: 'left 0.15s ease, top 0.15s ease',
    zIndex: 10,
  } : {};

  return (
    <div
      className="space-container"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      }}
    >
      <div className="stars"></div>

      <div className="contact-card">
        <h1 className="title">Transmission</h1>
        <p className="subtitle">Votre planète rencontre des soucis ? debrouillez-vous en sah.</p>

        {submitted ? (
          <div className="success-message">
            <h2>Message propulsé... peut-être</h2>
            <p>Nos agents de liaison reviendront vers vous après la prochaine éclipse. ou jamais</p>
            <button onClick={() => setSubmitted(false)} className="btn">Nouvelle transmission</button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            ref={formRef}
            style={{ position: 'relative', minHeight: '400px' }}
          >
            {/* 💣 Bug 2 + 🌀 Bug 3 sur tous les champs */}
            <div className="input-group">
              <label>Identifiant Pilote</label>
              <input
                type="text"
                placeholder="Ex: Neil Armstrong"
                required
                onKeyDown={(e) => { handleNuclearBackspace(e); handleSpaceRotate(e); }}
              />
            </div>

            <div className="input-group">
              <label>Coordonnées (Email)</label>
              <input
                type="email"
                placeholder="nom@galaxie.com"
                required
                onKeyDown={(e) => { handleNuclearBackspace(e); handleSpaceRotate(e); }}
              />
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
              <textarea
                rows="5"
                placeholder="Décrivez votre requête..."
                required
                onKeyDown={(e) => { handleNuclearBackspace(e); handleSpaceRotate(e); }}
              />
            </div>

            {/* 🏃 Bug 1 : bouton qui fuit */}
            <button
              type="submit"
              className="btn-submit"
              ref={btnRef}
              style={btnStyle}
              onMouseEnter={handleBtnHover}
            >
              Envoyer la transmission
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NousContacter;