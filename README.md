# Site Web Philémon Eydoux - Kinésithérapeute

## 🎯 À propos

Site web professionnel pour Philémon Eydoux, kinésithérapeute à Levallois-Perret (92).

### ✨ Caractéristiques

- **Design moderne** : Interface épurée en bleu pastel
- **Responsive** : Adapté mobile, tablette et desktop
- **Multi-pages** :
  - 🏠 **Accueil** : Présentation générale avec logo, localisation et CTA
  - 👤 **Qui je suis** : Parcours professionnel et expertise
  - 💰 **Tarifs** : Packages et services additionnels
  - 📞 **Contact** : Intégration WhatsApp et informations pratiques

### 🚀 Stack Technologique

- **Framework** : Next.js 14
- **Langage** : TypeScript
- **Styling** : CSS Modules
- **Icons** : Lucide React
- **Déploiement** : Vercel

## 📁 Structure du Projet

```
.
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── globals.css             # Styles globaux
│   ├── page.tsx                # Page d'accueil
│   ├── page.module.css         # Styles accueil
│   ├── about/
│   │   ├── page.tsx            # Page "Qui je suis"
│   │   └── about.module.css    # Styles about
│   ├── pricing/
│   │   ├── page.tsx            # Page tarifs
│   │   └── pricing.module.css  # Styles pricing
│   └── contact/
│       ├── page.tsx            # Page contact
│       └── contact.module.css  # Styles contact
├── components/
│   ├── Navigation.tsx          # Barre de navigation
│   ├── Navigation.module.css   # Styles navigation
│   ├── Footer.tsx              # Pied de page
│   └── Footer.module.css       # Styles footer
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md                   # Ce fichier
```

## 🎨 Design

### Palette de couleurs

- **Primaire** : `#A8D8EA` (Bleu pastel clair)
- **Secondaire** : `#C5E1DF` (Bleu-vert pastel)
- **Accent** : `#7CB9D4` (Bleu pastel foncé)
- **Dark** : `#2C3E50` (Gris-bleu foncé)
- **Light** : `#F8FBFC` (Blanc bleu léger)

## 🔧 Installation locale

```bash
# Cloner ou télécharger le projet
# cd dans le dossier du projet

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Le site sera disponible sur http://localhost:3000
```

## 📦 Build & Déploiement sur Vercel

### Option 1 : Vercel CLI

```bash
# Installer la CLI Vercel
npm i -g vercel

# Déployer
vercel
```

### Option 2 : GitHub + Vercel

1. Créer un repository GitHub
2. Pusher ce code sur GitHub
3. Connecter le repo à Vercel (vercel.com)
4. Vercel déploiera automatiquement à chaque push

### Configuration du domaine personnalisé

1. Aller dans les settings du projet Vercel
2. Aller à "Domains"
3. Ajouter votre domaine personnalisé
4. Suivre les instructions pour configurer les DNS

## 📞 Infos de Contact

- **Téléphone** : 06 35 55 00 50
- **Localisation** : Levallois-Perret (92)
- **Spécialités** : Rééducation, Réathlétisation, Suivi du handicap

## 🛠️ Personnalisation

### Modifier le téléphone

Modifier dans `app/contact/page.tsx` :
```typescript
const PHONE_NUMBER = '33635550050'
```

### Modifier les couleurs

Modifier les variables CSS dans `app/globals.css` :
```css
:root {
  --color-primary: #A8D8EA;
  --color-secondary: #C5E1DF;
  --color-accent: #7CB9D4;
  /* ... */
}
```

### Modifier le contenu

Chaque page est un fichier `.tsx` facilement éditable. Les styles correspondants sont dans les fichiers `.module.css`.

## 📱 Optimisations Mobile

- Menu burger responsive
- Images optimisées
- Textes adaptés aux petits écrans
- Touches/boutons dimensionnés pour le tactile

## ♿ Accessibilité

- Contrastes de couleurs respectant les normes WCAG
- Hiérarchie des titres appropriée
- Liens descriptifs
- Icônes accompagnées de texte

## 📈 SEO

- Métadonnées optimisées
- Structure sémantique HTML
- URLs explicites
- Mobile-first responsive design

## 📄 Licence

Site professionnel de Philémon Eydoux

---

**Besoin d'aide ?** Contactez Philémon via WhatsApp au 06 35 55 00 50
