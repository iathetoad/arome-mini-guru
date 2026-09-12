# AROME Mini-Guru V5

Déposer les fichiers à la racine d'un dépôt GitHub Pages.

## Nouveautés V5

- Widget compact sticky en haut : température, vent, rafales, direction, pluie + strip horaire 8h
- Toucher le widget fait défiler vers les prévisions complètes
- Grille carte réduite à 3x3 points (9 appels au lieu de 25)
- Sélecteur de plage 24h / 48h / 72h
- Service Worker amélioré : cache Open-Meteo en stale-while-revalidate
- Design épuré, cyan/bleu nuit, sans pollution visuelle

## Installation Android

Chrome → ouvrir l'URL GitHub Pages → ⋮ → Ajouter à l'écran d'accueil.

## Fichiers

- `index.html` — application complète
- `sw.js` — service worker
- `manifest.webmanifest` — PWA manifest
- `_nojekyll` — désactive Jekyll sur GitHub Pages
