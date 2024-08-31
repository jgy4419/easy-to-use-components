import mysql from "mysql2/promise";

const connection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "EasyComponent"
});

export default connection;