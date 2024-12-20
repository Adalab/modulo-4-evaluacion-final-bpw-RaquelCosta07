const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
   

const api = express();

api.use(cors());
api.use(express.json());

const port = 5001;
api.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})
