# E-commerce-Back-End



## Description

A back end for a e-commerce website that uses the latest technologies (mySQL, Sequalize, ORM "Object Relational Mapping").

## What I have Learned

How to sync sequalized with the database and server, sequalize, ORM, dotenv, and while also learning how to use Insomnia to test my HTTP request messing with data!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Make sure to run "npm i" to have all the dependencies installed

## Usage

<!-- ADD GIF AND MP4 HERE -->

## Features

### 1. Express Server Setup
   - Utilizes the Express.js framework to run a server.
   - Middleware setup for parsing JSON data and URL-encoded data.

### 2. MySQL Database and Sequelize ORM Integration
   - Uses MySQL as the database management system.
   - Implements Sequelize, an ORM (Object-Relational Mapping) for interacting with the database.

### 3. Environment Variables with Dotenv
   - Utilizes `dotenv` for managing environment variables.
   - Securely stores sensitive information like database credentials and API keys.

### 4. RESTful API Structure
   - Modular routing with the use of Express Router.
   - Organized API endpoints following RESTful conventions for managing resources.

### 5. Database Models and Seeds
   - Defines Sequelize models for Categories, Products, Tags, and ProductTags.
   - Provides seed scripts for populating the database with initial data.

### 6. Tag Routes
   - Implements CRUD operations for tags in the `/api/tags` endpoint.
   - Retrieves associated Product data when fetching tags.

### 7. Category Routes
   - Implements CRUD operations for categories, although not explicitly shown in provided code.

### 8. Product Routes
   - Implements CRUD operations for products, although not explicitly shown in provided code.

### 9. Server Initialization
   - Syncs Sequelize models with the database before starting the server.
   - Exits the process after seeding the database with initial data.

### 10. Error Handling
   - Proper error handling with HTTP status codes and informative error messages.
   - Handles cases where resources are not found or operations fail.

### 11. Scalability
   - Prepared for scalability with Sequelize migrations and model associations.
   - Easily extendable to add more routes, models, and features.

## Credits

I have rewatched my pre-recorded classes of learning ORM "Object Relational Mapping", and used the activities in the UCSD (Univiersity of California San Diego) SQL folder section to help me with this project. Along with watching ORM educational videos on YouTube to help better my understanding, and reading the sequalized documentation.

## License

## Contribution

Feel free to test out my ecommerce-back-end, and give any feedback on how I can improve it. [Contact AJ here](#questions)

## Tests

For users to test out my employee tracker

## Questions

If you have any questions, please contact me at businesswawj@gmail.com. You can also visit my GitHub page at https://github.com/lifewawj.