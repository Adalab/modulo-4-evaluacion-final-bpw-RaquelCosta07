const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
   

const api = express();

api.use(cors());
api.use(express.json());

//funcion p conectar a la DB
async function getDBConnection(){
     const connection = await mysql.createConnection({
        host: "mysql-3c94dc8c-series.l.aivencloud.com",
        user: "avnadmin",
        password: "AVNS_KHvsf58dWWj8arLDT4C",
        database: "series_db",
        port: 14105
    });
    connection.connect();
    return connection;
}

const port = 4002;
api.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})


//endpoints

//GET all the series

api.get("/api/series", async (req, res) => {
    const connection = await getDBConnection();
    const query = "SELECT * FROM series";
    const [result] = await connection.query(query);
    
    connection.end();

    res.status(200).json({
        info: {count: result.length},
        results: result
    });
})

//GET a serie by id

api.get("/api/serie/:id", async (req, res) => {
    const idSerie = req.params.id;
    const connection = await getDBConnection();
    const query = "SELECT * FROM series WHERE id = ?";
    const [result] = await connection.query(query, [idSerie]);
    
    connection.end();

     res.status(200).json({
        success: true,
        result: result[0]
    });
})

//POST

api.post("/api/serie", async (req, res) => {
    
    const {title, category_id, director, main_actor} = req.body;
    const connection = await getDBConnection()
    const query = "INSERT INTO series (title, category_id, director, main_actor)VALUES  (?, ?, ?, ?)";
     const [result] = await connection.query(query, [title, category_id, director, main_actor]);
    res.status(201).json({
        success: true,
        id: result.insertId
    });
})

//UPDATE with

api.put("/api/series/:id", async (req, res) => {
  const id = req.params.id;
  const { title, category_id, director, main_actor } = req.body;


    const connection = await getDBConnection();
    const query = `UPDATE series SET title = ?, category_id = ?, director = ?, main_actor = ? WHERE id = ?`;
    const [result] = await connection.query(query, [title, category_id,director, main_actor, id]);

    connection.end();
    res.status(200).json({ success: true });

});

//DELETE

api.delete("/api/series/:id", async (req, res) => {
     
    const connection = await getDBConnection();
    const query = `DELETE FROM series WHERE id = ?`;
    const [result] = await connection.query(query, [req.params.id]);
    connection.end();
    res.status(200).json({ success: true });
     
  
});