# Installation Sécurisée de n8n avec Docker Compose

Ce dossier contient une configuration sécurisée pour lancer n8n avec une base de données PostgreSQL et l'authentification de base activée.

## Prérequis

- [Docker](https://docs.docker.com/get-docker/) installé sur votre machine.
- [Docker Compose](https://docs.docker.com/compose/install/) (généralement inclus avec Docker Desktop).

## Configuration

Avant de lancer n8n, il est important de créer le fichier `.env` et de définir vos propres mots de passe et clés secrètes.

1.  Copiez le fichier d'exemple :
    ```bash
    cp .env.example .env
    ```
2.  Ouvrez le fichier `.env` et modifiez les valeurs suivantes :
    - `POSTGRES_USER` : Nom d'utilisateur de la base de données.
    - `POSTGRES_PASSWORD` : Mot de passe de la base de données (choisissez un mot de passe fort).
    - `POSTGRES_DB` : Nom de la base de données.
    - `N8N_BASIC_AUTH_USER` : Nom d'utilisateur pour accéder à n8n.
    - `N8N_BASIC_AUTH_PASSWORD` : Mot de passe pour accéder à n8n.
    - `N8N_ENCRYPTION_KEY` : Clé de chiffrement pour les identifiants n8n. **C'est très important de changer cette valeur et de ne jamais la perdre.**
    - `GENERIC_TIMEZONE` : Fuseau horaire (par exemple `Europe/Paris`).

## Lancement

Pour lancer l'application, ouvrez un terminal dans ce dossier et exécutez la commande suivante :

```bash
docker compose up -d
```

Cette commande va télécharger les images nécessaires et démarrer les conteneurs en arrière-plan.

## Accès

Une fois les conteneurs démarrés, vous pouvez accéder à n8n à l'adresse suivante :

[http://localhost:5678](http://localhost:5678)

Vous devrez entrer le nom d'utilisateur et le mot de passe définis dans le fichier `.env` (`N8N_BASIC_AUTH_USER` et `N8N_BASIC_AUTH_PASSWORD`).

## Arrêt

Pour arrêter les conteneurs :

```bash
docker compose down
```

Pour arrêter les conteneurs et supprimer les volumes (attention, cela supprimera toutes vos données n8n) :

```bash
docker compose down -v
```
