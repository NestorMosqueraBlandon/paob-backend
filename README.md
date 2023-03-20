# Paob Notes App

This is a project for a notes application implemented using NodeJS with Typescript, Fastify, and Mongoose. The application allows users to create, read, update, and delete notes.

## Requirements
Before running this application, make sure you have the following requirements installed:

- Node.js v12 or higher
- MongoDB

## Installation
To install this application, follow these steps:

- Clone this repository using git clone.
- Navigate to the project root directory using cd paob-backend.
- Install the project dependencies using pnpm install.

## Configuration
To configure this application, follow these steps:

- Create a .env file in the project root directory.
- Define the following environment variables in the .env file:
makefile
Copy code
MONGODB_URI=<MongoDB connection URI>
API_KEY=<API key>

## Usage
To use this application, follow these steps:

- Run the application using pnpm start.
- The application will run on http://localhost:8000.
- Use an HTTP client tool (such as Postman or cURL) to interact with the API.


## API
This application implements a RESTful API with the following routes:

Get all notes
`GET /notes`

This route allows you to retrieve all notes stored in the database. An API key is required to access this route.

Get a specific note
`GET /notes/:id`

This route allows you to retrieve a specific note identified by its ID. An API key is required to access this route.

Create a new note
`POST /notes`

This route allows you to create a new note. You must send a JSON object with the following fields:

An API key is required to access this route.


## Contributions
Contributions are welcome and appreciated. If you wish to contribute to this project, please create a Pull Request.

## License
This project is licensed under the MIT License. For more information, please refer to the [MIT licensed](./LICENSE) LICENSE file.