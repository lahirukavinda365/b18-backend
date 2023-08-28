import mysql from 'mysql';
import dbConfig from "./dbConfig.js";

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
    return;
  }

  console.log("Connected to MySQL database!");
});

export default connection;
