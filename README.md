# Docteur Permis — React + Node.js

## Stack technique
- **Frontend** : React 18 + Vite + Tailwind CSS → Vercel
- **Backend** : Node.js + Express → Vercel Serverless
- **Base de données** : MongoDB Atlas (gratuit)
- **Emails** : Resend (gratuit jusqu'à 3000 emails/mois)

---

## Installation

### 1. Prérequis
- Node.js 18+ installé (https://nodejs.org)
- Compte Vercel gratuit (https://vercel.com)
- Compte MongoDB Atlas gratuit (https://mongodb.com/atlas)
- Compte Resend gratuit (https://resend.com)

### 2. Cloner et installer

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Variables d'environnement

**backend/.env** (créer ce fichier) :
```
MONGODB_URI=mongodb+srv://...votre URI Atlas...
RESEND_API_KEY=re_...votre clé Resend...
WA_NUMBER=33757750783
PORT=3001
```

**frontend/.env** (créer ce fichier) :
```
VITE_API_URL=http://localhost:3001
```

### 4. Lancer en développement

```bash
# Terminal 1 — Backend
cd backend
npm run dev

# Terminal 2 — Frontend
cd frontend
npm run dev
```

Ouvrir http://localhost:5173

### 5. Déploiement sur Vercel

```bash
npm install -g vercel
vercel login

# Déployer le frontend
cd frontend
vercel --prod

# Déployer le backend
cd ../backend
vercel --prod
```

---

## Structure du projet

```
docteur-permis/
├── frontend/
│   ├── src/
│   │   ├── components/     # Composants réutilisables
│   │   ├── pages/          # Pages du site
│   │   ├── hooks/          # Hooks personnalisés
│   │   └── utils/          # Fonctions utilitaires
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── src/
│   │   ├── routes/         # Routes API
│   │   ├── models/         # Modèles MongoDB
│   │   └── middleware/     # Middlewares
│   └── package.json
└── README.md
```

---

## Pages disponibles

| URL | Page |
|---|---|
| `/` | Accueil |
| `/permis-b` | Formules Permis B |
| `/permis-moto` | Permis Moto A2 |
| `/pack-web-code` | Pack Web Code |
| `/temoignages` | Témoignages |
| `/conditions` | CGV |

## API disponible

| Méthode | Route | Description |
|---|---|---|
| POST | `/api/contacts` | Sauvegarder un contact |
| GET | `/api/contacts` | Lister les contacts |
| POST | `/api/reservations` | Créer une réservation |
| GET | `/api/reservations` | Lister les réservations |
| GET | `/api/eleves` | Lister les élèves |
"# docteur" 
"# docteur" 
