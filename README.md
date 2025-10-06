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
## 7. Database (MySQL)

**Description:**  
The project uses MySQL as a relational database to store application data, particularly the `items` table managed by the backend. The database runs in a separate Docker service and communicates with the backend through an internal Docker network defined in `docker-compose.yml`.

**Configuration:**  
- **Container name:** `db`  
- **Internal port:** 3306 (accessible only from other Docker services)  
- **User:** `appuser`  
- **Password:** `apppass`  
- **Database name:** `appdb`  

**Example `items` table creation (SQL):**
```sql
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


## 8 Tests


**Objective:**  
To verify that the different services (frontend, backend, database) are functioning correctly and that the REST API responds as expected.

**Manual Tests:**  
1. **Backend verification:**
   - Start the backend container:  
     ```bash
     docker-compose up backend
     ```
   - Test the REST API using `curl` or Postman:  
     ```bash
     curl http://localhost:5000/items
     ```
     - Should return a JSON list of items (empty if no items have been added).  
   - Add a new item:  
     ```bash
     curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d '{"name":"Item1","description":"Test"}'
     ```

2. **Database verification:**
   - Connect to the MySQL container:  
     ```bash
     docker exec -it db mysql -u appuser -p
     ```
     - Password: `apppass`  
     - Check the `items` table:  
       ```sql
       USE appdb;
       SELECT * FROM items;
       ```

3. **Frontend verification:**
   - Access `https://localhost:8080`  
   - Ensure the page loads and that reading/adding items works correctly.

**Automated Tests (optional):**  
- Backend: unit tests using Jest (Node.js) or Pytest (if using Flask).  
- Scripts: run `npm test` to execute the tests.



# 9 Déploiment, versionning et contribution
- Déploiment avec Docker Compose
- Intégration continue via GitHub
- Convention de commits
- Branches principales : main et develop
- Branches feature pour test : "merge-test" et "solution_nodejs_complete"
