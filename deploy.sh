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
docker run -d --net backend --ip 172.18.0.6 --name=angular-demo-franck -p 4200:80