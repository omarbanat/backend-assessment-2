# Backend Assessment for Article Application

## Setting up the Backend

1. **Clone Repository**: Begin by cloning the backend repository to your local machine.
2. **Create a New Branch**: Create a new branch with the name `firstname-lastname` to work on your project.
3. **Node.js Project**: Set up a new Node.js project for the backend.
4. **Install Dependencies**: Install the required dependencies.
5. **Create database**: Create a new database for the project using MongoDB Atlas.

## Instructions

Develop the backend for the article application to handle article creation, article retrieval, article updating, and article deletion.

## Requirements

1. **Article Data Model**:

   - Create a article schema using Mongoose for storing article data.
   - The schema should include fields for image URLs, title, category, body, and author.
   - All fields should be required.
   - Set timestamps for the schema.

2. **Article Creation API**:

   - Create an API endpoint for adding new articles.
   - The endpoint should accept the article data as a JSON object in the request body.
   - Save the created articles to the database.

3. **Article Retrieval API**:

   - Create API endpoints to retrieve articles:
     - Retrieve all articles.
     - Retrieve a single article by its ID.

4. **Article Update API**:

   - Create an API endpoint for updating articles.

5. **Article Deletion API**:

   - Create an API endpoint for deleting articles.

## Bonus

- Modify the category field to be an array of strings instead of a single string, so it can accept multiple categories for an article.

## Submission

- After implementing the project, stage your changes, commit them, and push to your branch.
