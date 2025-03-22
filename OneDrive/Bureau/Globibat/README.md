# Globibat - Site Web d'Entreprise Générale de Construction

Site web professionnel pour Globibat, une entreprise générale de construction basée à Genève, offrant des services de construction, rénovation, électricité, serrurerie, nettoyage et déménagement.

## Technologies Utilisées

- **Next.js 14** - Framework React avec rendu côté serveur
- **TypeScript** - Pour un code plus robuste et maintenable
- **Tailwind CSS** - Pour un design responsive et moderne
- **React Icons** - Pour les icônes
- **Schema.org** - Pour le balisage structuré et l'amélioration du SEO

## Fonctionnalités

- **Design Responsive** - S'adapte à tous les appareils (mobile, tablette, desktop)
- **Optimisation SEO** - Métadonnées, balises structurées, sitemap.xml et robots.txt
- **Formulaire de Contact** - Avec validation et gestion des erreurs
- **Calculateur de Volume** - Outil interactif pour estimer le volume de déménagement
- **Galerie de Projets** - Présentation des réalisations avec filtrage par catégorie
- **Pages de Services** - Présentation détaillée des différents services
- **Conformité RGPD** - Mentions légales et politique de confidentialité

## Structure du Projet

```
src/
├── app/                    # Pages de l'application
│   ├── a-propos/           # Page À propos
│   ├── contact/            # Page Contact
│   ├── mentions-legales/   # Page Mentions légales
│   ├── politique-confidentialite/ # Page Politique de confidentialité
│   ├── realisations/       # Page Réalisations
│   ├── services/           # Pages des services
│   │   └── construction-renovation/ # Page Construction & Rénovation
│   ├── calculateur-volume/ # Page Calculateur de volume
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── not-found.tsx       # Page 404
├── components/             # Composants réutilisables
│   ├── layout/             # Composants de mise en page
│   │   ├── Header.tsx      # En-tête du site
│   │   ├── Footer.tsx      # Pied de page
│   │   └── Layout.tsx      # Layout global
│   ├── sections/           # Sections de page
│   │   ├── ContactForm.tsx # Formulaire de contact
│   │   ├── ProjectGrid.tsx # Grille de projets
│   │   └── VolumeCalculator.tsx # Calculateur de volume
│   └── ui/                 # Composants d'interface utilisateur
│       ├── Breadcrumb.tsx  # Fil d'Ariane
│       ├── Button.tsx      # Bouton personnalisé
│       └── SectionHeading.tsx # Titre de section
├── lib/                    # Bibliothèques et utilitaires
│   └── utils/              # Fonctions utilitaires
│       └── calculator-config.ts # Configuration du calculateur de volume
└── public/                 # Fichiers statiques
    ├── images/             # Images du site
    ├── robots.txt          # Fichier robots.txt pour les moteurs de recherche
    ├── sitemap.xml         # Plan du site pour les moteurs de recherche
    └── site.webmanifest    # Manifeste pour les applications web progressives
```

## Pages Principales

1. **Accueil** - Présentation de l'entreprise et des services
2. **À propos** - Histoire, valeurs et équipe de l'entreprise
3. **Services** - Détail des services offerts
   - Construction & Rénovation
   - Électricité & Dépannage
   - Serrurerie & Dépannage
   - Nettoyage & Conciergerie
   - Débarras & Déménagement
4. **Réalisations** - Portfolio des projets réalisés
5. **Calculateur de Volume** - Outil pour estimer le volume de déménagement
6. **Contact** - Formulaire de contact et informations
7. **Mentions Légales** - Informations juridiques
8. **Politique de Confidentialité** - Politique RGPD

## Stratégie SEO

- **Métadonnées** - Titres et descriptions optimisés pour chaque page
- **Balisage structuré** - Utilisation de Schema.org pour améliorer la visibilité dans les SERP
- **Sitemap XML** - Pour faciliter l'indexation par les moteurs de recherche
- **Robots.txt** - Pour guider les robots d'indexation
- **URLs conviviales** - Structure d'URL claire et descriptive
- **Contenu optimisé** - Textes riches en mots-clés pertinents
- **Responsive Design** - Optimisé pour mobile (facteur de classement Google)
- **Performance** - Optimisation des images et du code pour un chargement rapide

## Installation et Démarrage

1. Cloner le dépôt :
   ```
   git clone https://github.com/votre-utilisateur/globibat.git
   ```

2. Installer les dépendances :
   ```
   cd globibat
   npm install
   ```

3. Lancer le serveur de développement :
   ```
   npm run dev
   ```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement

Le site peut être déployé sur Vercel, Netlify ou tout autre service compatible avec Next.js.

```
npm run build
```

## Licence

Tous droits réservés - Globibat Sàrl 