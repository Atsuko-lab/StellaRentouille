# 🌌 StellaRentouille

**StellaRentouille** est une plateforme fictive de location et d'acquisition certifiée d'astres et de corps célestes. Parcourez un catalogue galactique de planètes, astéroïdes et soleils, consultez leurs caractéristiques détaillées et devenez propriétaire d'un astre en quelques clics.

---

## 📋 Table des matières

- [🌌 StellaRentouille](#-stellarentouille)
  - [📋 Table des matières](#-table-des-matières)
  - [🔭 Aperçu](#-aperçu)
  - [✨ Fonctionnalités](#-fonctionnalités)
  - [🛠 Stack technique](#-stack-technique)
  - [📦 Installation](#-installation)
    - [Prérequis](#prérequis)
    - [Étapes](#étapes)
  - [🚀 Lancement](#-lancement)
  - [📁 Structure du projet](#-structure-du-projet)
  - [📄 Pages et composants](#-pages-et-composants)
    - [🏠 Accueil (`/`)](#-accueil-)
    - [🛒 Marché (`/marche`)](#-marché-marche)
    - [🔍 ModalInfo (popup)](#-modalinfo-popup)
    - [📬 Contact (`/contact`)](#-contact-contact)
    - [🧭 Header](#-header)
  - [📊 Données](#-données)
    - [Planètes (`planets.json`)](#planètes-planetsjson)
    - [Astéroïdes (`asteroides.json`)](#astéroïdes-asteroidesjson)
    - [Soleils (`soleil.json`)](#soleils-soleiljson)
  - [📜 Scripts disponibles](#-scripts-disponibles)
  - [🐛 Bugs à corriger](#-bugs-à-corriger)
    - [Bug 1 — Formulaire de contact : saisie de texte](#bug-1--formulaire-de-contact--saisie-de-texte)
    - [Bug 2 — Formulaire de contact : bouton envoyer](#bug-2--formulaire-de-contact--bouton-envoyer)
    - [Bug 3 — Les soleils ne s'affichent pas](#bug-3--les-soleils-ne-saffichent-pas)
    - [Bug 4 — La Terre ne doit pas être sur le site](#bug-4--la-terre-ne-doit-pas-être-sur-le-site)
    - [Bug 5 — Mars indisponible mais toujours cliquable](#bug-5--mars-indisponible-mais-toujours-cliquable)
    - [Bug 6 — Le dropdown de tri par type ne fonctionne pas](#bug-6--le-dropdown-de-tri-par-type-ne-fonctionne-pas)
    - [Bug 7 — Le bouton « Louer cet astre » ne ferme pas la popup](#bug-7--le-bouton--louer-cet-astre--ne-ferme-pas-la-popup)
    - [Bug 8 — Image manquante sur certains astéroïdes](#bug-8--image-manquante-sur-certains-astéroïdes)
    - [Bug 9 — Clic sur un astéroïde redirige vers l'accueil](#bug-9--clic-sur-un-astéroïde-redirige-vers-laccueil)
    - [Bug 10 — Fond coupé sur la page Accueil](#bug-10--fond-coupé-sur-la-page-accueil)

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
cd StellaRentouille-main/StellaRentouille

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

---

## 🐛 Bugs à corriger

Ce projet contient **des bugs intentionnels** à des fins pédagogiques. Votre mission : les identifier dans le code et les corriger.

### Bug 1 — Formulaire de contact : saisie de texte

Quand je tape une phrase dans un champ texte, **l'interface re-render à la fin de chaque mot**. De plus, quand je veux effacer un caractère, **ça efface tout le champ** d'un coup.

> **Page concernée :** Contact (`/contact`)

---

### Bug 2 — Formulaire de contact : bouton envoyer

**Je ne peux pas cliquer sur le bouton « Envoyer »** du formulaire de contact.

> **Page concernée :** Contact (`/contact`)

---

### Bug 3 — Les soleils ne s'affichent pas

Les soleils (étoiles) **ne s'affichent pas du tout** sur la page Marché, alors qu'il y en a 5 dans les données.

> **Page concernée :** Marché (`/marche`)

---

### Bug 4 — La Terre ne doit pas être sur le site

La planète **Terre ne doit pas apparaître** dans le catalogue du marché. Il faut la filtrer.

> **Page concernée :** Marché (`/marche`)

---

### Bug 5 — Mars indisponible mais toujours cliquable

Mars est marquée comme **Indisponible**, elle ne doit donc **pas être cliquable** (pas de popup au clic). En revanche, sa carte doit toujours rester visible sur le marché.

> **Page concernée :** Marché (`/marche`)

---

### Bug 6 — Le dropdown de tri par type ne fonctionne pas

Il y a un **dropdown pour trier/filter les articles par type** (planètes, astéroïdes, soleils), mais il **ne fonctionne pas** : la sélection ne change rien à l'affichage.

> **Page concernée :** Marché (`/marche`)

---

### Bug 7 — Le bouton « Louer cet astre » ne ferme pas la popup

Quand je clique sur le bouton **« Louer cet astre »** dans la popup de détails, **la popup doit se fermer** mais elle reste ouverte.

> **Composant concerné :** ModalInfo

---

### Bug 8 — Image manquante sur certains astéroïdes

Sur **certains astéroïdes**, l'image ne s'affiche pas (image cassée ou chemin incorrect).

> **Page concernée :** Marché (`/marche`)

---

### Bug 9 — Clic sur un astéroïde redirige vers l'accueil

Quand je clique sur la carte d'un **astéroïde**, au lieu d'ouvrir la popup de détails, je suis **redirigé vers la page d'accueil**.

> **Page concernée :** Marché (`/marche`)

---

### Bug 10 — Fond coupé sur la page Accueil

Sur la page d'accueil, **le fond apparaît comme coupé** (il ne couvre pas toute la page ou se termine brusquement).

> **Page concernée :** Accueil (`/`)
