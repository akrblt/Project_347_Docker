# Virtualisation d'une application avec des conteneurs
## 1 Introduction
### Sujet
Stack Web + DB avec Docker Compose

### But
Conteneuriser une application web composée de plusieurs services frontend et backend.

### Stack technique
Frontend : Nginx\
Backend : Node.js\
Base de données: MySQL\
Orchestration : Docker & Docker Compose

## 2 Structure du projet
![alt text](img_1.png)

## 3 Installation et configuration
### Prérequis
- Docker et Docker Compose installés
- Node.js
- MySQL client
- Variables d'environnement (voir le fichier ".env")

## 4 Lancer l'application
1. Cloner le repo 
$ git clone https://github.com/akrblt/Project_347_Docker.git
$ cd Project_347_Docker

2. Copier .env.example en .env et remplir les variables
3. Lancer le conteneur $ docker-compose up --build

4. Accéder à l'app :
https://localhost:8080

## 5 Frontend
index.html
- HTML + CSS natifs (mise en page simple)
- JavaScript Vanilla (pur) pour communiquer avec une API REST

## 6 Backend
### Description
- API REST construite avec Node.js et Express
- Intéraction avec la base MySQL via le module mysql2/promise
- Gère une table items avec des opérations simples de lecture et d'ajout
  
### Variables d'environnement
#### Variable	    Défaut	    Description
MYSQL_HOST	    db	        Hôte du serveur MySQL\
MYSQL_USER	    appuser	    Utilisateur MySQL\
MYSQL_PASSWORD	apppass	    Mot de passe MySQL\
MYSQL_DATABASE	appdb	    Nom de la base\
PORT	        5000    	Port d’écoute du backend\

## 7 Base de données (MySQL)

## 8 Tests


# 9 Déploiment, versionning et contribution
- Déploiment avec Docker Compose
- Intégration continue via GitHub
- Convention de commits
- Branches principales : main et develop
- Branches feature pour test : "merge-test" et "solution_nodejs_complete"