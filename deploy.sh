#!/bin/bash

# Mettre à jour le code source
git pull

# Construire l'image Docker
docker build --no-cache -t angular-demo-franck .

# Arreter le conteneur existant
docker stop angular-demo-franck

# Supprimer le conteneur existant
docker rm angular-demo-franck

# Lancer un nouveau conteneur
docker run -d --name=angular-demo-franck -p 4200:80 angular-demo-franck