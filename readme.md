# Node - Docker - Project

A simple backend API built with **Node.js, Express, MongoDB, and Docker**.  
This project demonstrates how to containerize a Node.js application with MongoDB using **Docker and Docker Compose**.

## Tech stack

- Node.js + Express.js
- MongoDB + Mongoose
- Docker
- cors
- Typescript

## Project Structure

```
    ├── docker-compose.yml
    ├── Dockerfile
    ├── package.json
    ├── package-lock.json
    ├── readme.md
    ├── src
    │   ├── config
    │   │   └── db.ts
    │   ├── controllers
    │   │   └── request.controller.ts
    │   ├── index.ts
    │   ├── models
    │   │   └── request.model.ts
    │   ├── routes
    │   │   └── request.route.ts
    │   ├── server.ts
    │   └── utils
    └── tsconfig.json
```

## Environment variables

```text
 MONGO_URI =
```

## Intallation & setup

### 1️⃣ Clone the repository

```
 https://github.com/Mayank9056-MM/yiscroll-node-docker-api
```

### 2️⃣ Run with Docker

Build and start containers:

```
 docker compose up --build
```

## Docker Setup

The project uses **Docker Compose** to run:

- Node.js API container
- MongoDB container

Docker automatically handles the internal networking between the API and database.

## Author

**Mayank Mahajan**

Full Stack Developer (MERN Stack)
