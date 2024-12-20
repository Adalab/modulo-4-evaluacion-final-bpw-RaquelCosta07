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

const port = 4001;
api.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})


//endpoints

/*

*/
api.get("/api/series", async (req, res) => {
    const connection = await getDBConnection();
    const query = "SELECT * FROM series";
    const [result] = await connection.query(query);
    console.log(result);

    res.json({});
})