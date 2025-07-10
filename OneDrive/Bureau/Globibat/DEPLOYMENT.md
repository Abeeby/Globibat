# Guide de déploiement Vercel

## Problème rencontré

Lors du premier déploiement, Vercel n'a pas détecté le projet Next.js car :
1. Le projet est dans un sous-dossier `OneDrive/Bureau/Globibat/`
2. Vercel cherchait par défaut à la racine du repository

## Solution

Un fichier `vercel.json` a été ajouté à la racine du repository avec :
```json
{
  "rootDirectory": "OneDrive/Bureau/Globibat"
}
```

## Configuration Vercel

### Variables d'environnement à configurer

Dans les paramètres du projet sur Vercel, ajouter :

```
NEXT_PUBLIC_GSC_TOKEN=votre-code-google-search-console
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

### Commandes de build

Vercel détecte automatiquement :
- Framework: Next.js
- Build Command: `pnpm build`
- Output Directory: `.next`
- Install Command: `pnpm install`

## Redéploiement

Après avoir ajouté le `vercel.json`, Vercel devrait :
1. Détecter le projet Next.js dans le bon dossier
2. Installer les dépendances avec pnpm
3. Builder le projet correctement
4. Générer le sitemap automatiquement

## Vérification

Après le déploiement, vérifier :
- ✅ La page d'accueil s'affiche
- ✅ `/sitemap.xml` est accessible
- ✅ `/robots.txt` est accessible
- ✅ Les variables d'environnement sont prises en compte

## Domaine personnalisé

Pour utiliser globibat.ch :
1. Aller dans Settings → Domains
2. Ajouter `globibat.ch` et `www.globibat.ch`
3. Configurer les DNS chez votre registrar