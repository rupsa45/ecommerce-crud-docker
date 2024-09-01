#  E-commerce Backend with Docker and MySQL

This project is a simple e-commerce backend developed using Node.js and Express, with Docker integration for managing the MySQL database. It includes basic CRUD operations for managing products.

## Prerequisites

- Docker
- Node.js
- MySQL client

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ecommerce-backend-docker.git
cd ecommerce-backend-docker


## Set up MySQL with Docker
Run the following command to set up a MySQL container with Docker

docker run --name sqldb -d -p 3306:3306 --rm -v mysqldata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD="test" mysql:latest
e399cde4e41febf41941415c193814edb58eeb27a4610f2129654ffb4da01649

## Access the MySQL database
mysql -u root -ptest

create database ecom;
use ecom;

CREATE TABLE products(
    -> id INT PRIMARY KEY AUTO_INCREMENT,
    -> title VARCHAR(32) NOT NULL,
    -> description VARCHAR(225) NOT NULL,
    -> price INT NOT NULL
    -> );


## API Endpoints
GET /products - Retrieve all products
POST /products - Create a new product
GET /products/:id - Retrieve a product by ID
PUT /products/:id - Update a product by ID
DELETE /products/:id - Delete a product by ID


This `README.md` provides a comprehensive guide for setting up the project, including running the MySQL database with Docker and creating the necessary database and table.
