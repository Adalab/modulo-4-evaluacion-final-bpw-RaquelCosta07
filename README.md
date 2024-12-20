# TV Series API

This is a RESTful API for managing TV series data. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on TV series data stored in a MySQL database. The project is built using Node.js, Express, and MySQL.

## Features

- **GET** all series
- **GET** a series by ID
- **POST** a new series
- **PUT** to update an existing series
- **DELETE** a series by ID

## Technologies Used

- Node.js
- Express.js
- MySQL
- CORS

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-RaquelCosta07.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your database connection credentials:
    ```
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_NAME=series_db
    DB_PORT=
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. The server will be running on `http://localhost:4002`.

## Endpoints

### 1. Get All Series

- **URL**: `/api/series`
- **Method**: `GET`
- **Response**: List of all TV series

**Example Response**:
```json
{
  "info": {
    "count": 3
  },
  "results": [
    {
      "id": 1,
      "title": "Grey's Anatomy",
      "category_id": 1,
      "director": "Shonda Rhimes",
      "main_actor": "Ellen Pompeo"
    },
    {
      "id": 2,
      "title": "The Big Bang Theory",
      "category_id": 2,
      "director": "Chuck Lorre",
      "main_actor": "Jim Parsons"
    }
  ]
}
