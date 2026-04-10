# 🌌 StellaRentouille

**StellaRentouille** est une plateforme fictive de location et d'acquisition certifiée d'astres et de corps célestes. Parcourez un catalogue galactique de planètes, astéroïdes et soleils, consultez leurs caractéristiques détaillées et devenez propriétaire d'un astre en quelques clics.

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#-stack-technique)
- [Installation](#-installation)
- [Lancement](#-lancement)
- [Structure du projet](#-structure-du-projet)
- [Pages et composants](#-pages-et-composants)
- [Données](#-données)
- [Scripts disponibles](#-scripts-disponibles)

---

## 🔭 Aperçu

StellaRentouille propose un marché intergalactique où chaque astre est mis en location avec :

- Un **prix en Bitcoin (₿)** par an
- Un **statut de disponibilité** (Disponible / Indisponible)
- Des **caractéristiques détaillées** (taille, climat, atmosphère, distance au soleil, etc.)
- Un **certificat de propriété** officiel avec jouissance exclusive de 99 ans

---

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| **Catalogue céleste** | 23 objets : 8 planètes, 10 astéroïdes et 5 soleils |
| **Popup détaillée** | Clic sur une carte pour afficher toutes les infos dans une modale |
| **Indicateur de disponibilité** | Badge vert/rouge selon le statut de l'astre |
| **Formulaire de contact** | Formulaire thématique spatial pour le support client |
| **Navigation** | Header avec liens vers Accueil, Marché et Contact |
| **Thème clair/sombre** | S'adapte automatiquement aux préférences système |
| **Responsive** | Grille adaptative pour tous les écrans |

---

## 🛠 Stack technique

- **React** 19 — Bibliothèque UI
- **React Router DOM** 7 — Routage SPA
- **Vite** — Bundler et serveur de développement
- **ESLint** — Linting du code
- **CSS vanilla** — Styles avec variables CSS custom (thème clair/sombre)

---

## 📦 Installation

### Prérequis

- **Node.js** >= 20.19.0 (ou >= 22.12.0)
- **npm**

### Étapes

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd StellaRentouille

# Installer les dépendances
npm install
```

> **Note :** Si vous avez une version de Node < 20.19.0, vous pouvez installer des versions compatibles de Vite :
> ```bash
> npm install vite@6 @vitejs/plugin-react@4
> ```

---

## 🚀 Lancement

```bash
# Serveur de développement (avec HMR)
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📁 Structure du projet

```
StellaRentouille/
├── index.html                  # Point d'entrée HTML
├── package.json                # Dépendances et scripts
├── vite.config.js              # Configuration Vite
├── eslint.config.js            # Configuration ESLint
├── public/
│   ├── planets.json            # Données des 8 planètes
│   ├── asteroides.json         # Données des 10 astéroïdes
│   ├── soleil.json             # Données des 5 soleils
│   └── img/                    # Images des astres (JPG/PNG)
│       ├── mercure.jpg
│       ├── venus.jpg
│       ├── terre.jpg
│       ├── mars.jpg
│       ├── jupiter.jpg
│       ├── saturne.jpg
│       ├── uranus.png
│       ├── neptune.jpg
│       ├── asteroide.jpg
│       ├── soleil.jpg
│       ├── sirius.jpg
│       ├── betelgeuse.jpg
│       ├── proxima.jpg
│       └── rigel.jpg
└── src/
    ├── main.jsx                # Point d'entrée React + Routeur
    ├── App.jsx                 # Composant App (page par défaut Vite)
    ├── index.css               # Styles globaux + variables CSS
    ├── App.css                 # Styles du composant App
    ├── assets/                 # Images statiques (accueil)
    ├── services/
    │   └── index.jsx           # Fonctions fetch (API JSON)
    └── components/
        ├── Header/             # Barre de navigation
        ├── Accueil/            # Page d'accueil
        ├── Marche/             # Page marché (catalogue)
        ├── ModalInfo/          # Popup détails d'un astre
        └── NousContacter/      # Page formulaire de contact
```

---

## 📄 Pages et composants

### 🏠 Accueil (`/`)

Page d'accueil présentant le concept de StellaRentouille en 3 sections illustrées :
1. Présentation de la plateforme d'acquisition d'astres
2. Détails sur le certificat de propriété et la tarification
3. Usages possibles (recherche, stockage, sanctuaire, cadeau)

### 🛒 Marché (`/marche`)

Catalogue complet des astres à louer, organisé en grille responsive :
- **8 planètes** du système solaire (Mercure → Neptune)
- **10 astéroïdes** (Ceres, Vesta, Bennu, Apophis…)
- **5 soleils** (Soleil, Sirius A, Bételgeuse, Proxima Centauri, Rigel)

Chaque carte affiche : image, nom, prix et statut. Un clic ouvre la **popup détaillée**.

### 🔍 ModalInfo (popup)

Modale affichée par-dessus le marché avec :
- Image et nom de l'astre
- Badge de disponibilité (vert = disponible, rouge = indisponible)
- Prix en ₿/an
- Caractéristiques détaillées adaptées au type d'objet :
  - **Planètes** : taille, climat, atmosphère, durée de l'année, distance au soleil
  - **Astéroïdes** : diamètre, vitesse, type
  - **Soleils** : rayon, température de surface
- Bouton « Louer cet astre » si disponible
- Fermeture par clic extérieur ou bouton ✕

### 📬 Contact (`/contact`)

Formulaire de contact thématique spatial avec :
- Identifiant Pilote (nom)
- Coordonnées (email)
- Sujet de la mission (sélection parmi : Géante Gazeuse, Problème de gravitation, SAV, Planète déjà habitée, Autre)
- Message de la mission
- Message de confirmation humoristique après envoi

### 🧭 Header

Barre de navigation présente sur toutes les pages avec :
- Logo « 🌌 StellaRentouille » (lien vers l'accueil)
- Liens : Accueil, Marché, Contact

---

## 📊 Données

Les données sont stockées en fichiers JSON statiques dans `/public/` et récupérées via `fetch()` dans le service `src/services/index.jsx`.

### Planètes (`planets.json`)

| Planète | Taille | Prix | Statut |
|---------|--------|------|--------|
| Mercure | 4 879 km | 100 000 ₿/an | Disponible |
| Vénus | 12 104 km | 150 000 ₿/an | Disponible |
| Terre | 12 756 km | 200 000 000 ₿/an | Disponible |
| Mars | 6 792 km | 1 000 000 ₿/an | Indisponible |
| Jupiter | 142 984 km | 500 000 ₿/an | Disponible |
| Saturne | 120 536 km | 800 000 ₿/an | Disponible |
| Uranus | 51 118 km | 500 000 ₿/an | Disponible |
| Neptune | 49 528 km | 10 ₿/an | Disponible |

### Astéroïdes (`asteroides.json`)

10 astéroïdes de types variés : planète naine, ceinture principale, géocroiseur, métallique. Prix : 5 000 à 20 000 ₿/an.

### Soleils (`soleil.json`)

5 étoiles dont le Soleil, Sirius A, Bételgeuse, Proxima Centauri et Rigel. Prix : 1 000 000 000 ₿/an chacun.

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement Vite avec HMR |
| `npm run build` | Génère le build de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Lance ESLint sur le projet |
