# ExpressShopperPlus

## Description

ExpressShopperPlus is an e-commerce platform designed to provide an efficient management system for shop owners. Built on Express.js and leveraging the power of Sequelize ORM for database interactions, this platform offers robust features for managing categories, products, and tags. The motivation behind ExpressShopperPlus was to create a scalable, easy-to-use online shopping platform that helps the user track their inventory. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

To get ExpressShopperPlus up and running, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies with `npm install`.
3. Set up your PostgreSQL database and update the `.env` file with your database name, user, and password.
4. Use the shell command `psql -U <username>` and enter your password.
5. Create the database by copying and pasting the schema (located in the db folder) onto the command line, then exit using `\q`
6. Seed the database with initial data by running `node seeds index.js` in the command line.
7. Start the server by running `node server.js` in the command line. Your application should now be running on `localhost:3000`.

## Usage

Use tools like Insomnia Core or Postman to interact with the API.

- To add a new product: `POST /api/products`. 
            Be sure to view the product's post route on `product-routes.js` in the api folder of the routes directory for an example of what the JSON request body should look like 
- To view all products: `GET /api/products`
- To view products by id: `GET /api/products/:id`
- To update a product by id: `PUT /api/products/:id`
- To delete a product by id: `DELETE /api/products/:id`

- To view all categories: `GET /api/categories`
- To view category by id: `GET /api/categories/:id`
- To add a new category: `POST /api/categories`
- To update a category: `PUT /api/categories/:id`. Be sure to add the new category name in the body of your request
- To delete a category by id: `DELETE /api/categories/:id`



- To View all Tags: `GET /api/tags`
- To View Tag by id: `GET /api/tags/:id`
- To update a tag name: `PUT /api/tags/:id`. Be sure to add the new tag name to the body of your request.
- To delete a tag by id: `DELETE /api/tags/:id` 
    


## Credits

This project was developed by Devon "HeviDevi" Ross using starter code provided by the edX coding bootcamp through the University of Central Florida. 


## Features

- RESTful API for managing products, categories, and tags.
- Seamless integration with PostgreSQL for robust data management.
- Scalable architecture suitable for e-commerce platforms of any size.
