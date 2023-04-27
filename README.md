# Billed App
Ce projet consiste à convertir l'application HRNet de jQuery en React et à remplacer certains des plugins jQuery existants par des composants React. Des tests de performance Lighthouse seront effectués pour comparer l'application actuelle et la nouvelle application.

## Tâches Principales
- Convertir toute l'application HRNet en React, notamment les pages "Create Employee" et "Employee List". Ajouter un système de gestion d'état cohérent avec React, et améliorer si nécessaire le style de l'application. Des tests unitaires pourront être réalisés si le temps le permet.
- Convertir un plugin jQuery en React et remplacer les 3 autres par des composants React existants ou que vous développerez.
- Tester les performances de l'application avec Lighthouse avant et après la conversion en React.

## Conversion des plugins
Les plugins jQuery suivants doivent être convertis en composants React :

- Plugin de sélection de date
- Plugin de fenêtre modale - jQuery.modal.js (converti en librairie NPM)
- Menus déroulants
- Plugin pour les tables de données

Lors de la conversion d'un plugin jQuery en un composant React, il faut garder à l'esprit de ne convertir que le code qui traite de la fonctionnalité réelle de l'interface utilisateur du plugin.
Ce qui à été fait ["react_modal_for_hrnet"](https://www.npmjs.com/package/react_modal_for_hrnet).

# Installation
Pour installer et exécuter le projet localement, vous devez cloner ce dépôt et installer les dépendances pour le client et le serveur.

Pour l'exécution de ce projet, il est nécessaire de posséder les logiciels suivants :
- [Node.js v12](https://nodejs.org/en/)

## Installation des dépendances

Pour installer les dépendances de modules exécutés par Node.js :

1. Ouvrir un nouveau terminal
2. Exécuter la commande ``` npm install``` pour installer les dépendances nécessaires
3. Enfin lancer le serveur local avec la commande ``` npm start```

### Version Build

1. Ouvrir un nouveau terminal
2. Exécuter la commande ``` npm run build```
3. Puis Exécuter la commande ``` server -s build``` pour lancer le sereur local pour les pages statiques


## Technologies utilisées
- Node.js
- React.js
- React Redux
- React Router
- Mui Material
