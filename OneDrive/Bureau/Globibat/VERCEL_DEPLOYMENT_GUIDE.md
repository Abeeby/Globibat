# Guide de déploiement Vercel - Résolution erreur 404

## Problème identifié

L'erreur 404 sur Vercel est causée par :
1. Structure de dossier inhabituelle (`OneDrive/Bureau/Globibat`)
2. Fichier `vercel.json` à la racine du repository qui pointe vers ce dossier
3. Problèmes de build avec les pages en anglais (i18n)

## Solution appliquée

### 1. Structure du repository

```
/
├── vercel.json                    # Configuration Vercel
└── OneDrive/Bureau/Globibat/     # Projet Next.js
    ├── src/                       # Code source
    ├── public/                    # Fichiers statiques
    ├── package.json               # Dépendances
    └── next.config.js             # Config Next.js
```

### 2. Configuration Vercel (`/vercel.json`)

```json
{
  "rootDirectory": "OneDrive/Bureau/Globibat",
  "framework": "nextjs",
  "buildCommand": "pnpm install && pnpm build",
  "outputDirectory": ".next"
}
```

### 3. Corrections appliquées

- ✅ Suppression du dossier `globibat` en doublon
- ✅ Suppression temporaire des pages en anglais (problèmes de build)
- ✅ Correction des erreurs TypeScript (ContactForm, Breadcrumb)
- ✅ Configuration `next-sitemap` dans les dependencies

## Variables d'environnement Vercel

Dans Settings → Environment Variables :

```bash
NEXT_PUBLIC_GSC_TOKEN=votre-code-google-search-console
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

## Vérification du déploiement

1. **Build logs** : Vérifier que le build dure ~2-3 minutes (pas 206ms)
2. **Framework** : Vercel doit détecter "Next.js"
3. **Output** : Le dossier `.next` doit être généré

## Debug si erreur 404 persiste

1. **Vérifier les logs de build** dans Vercel Dashboard
2. **Tester en local** :
   ```bash
   cd OneDrive/Bureau/Globibat
   pnpm build
   pnpm start
   ```
3. **Vérifier la structure** dans Functions → Source

## Domaine personnalisé

Une fois le déploiement fonctionnel :
1. Settings → Domains
2. Ajouter `globibat.ch` et `www.globibat.ch`
3. Configurer les DNS chez votre registrar

## Support

Si l'erreur persiste, vérifier :
- Le repository est bien à jour
- Les variables d'environnement sont configurées
- Le build passe en local