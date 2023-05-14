const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "shibudb",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database: ", error);
  } else {
    console.log("Connected to database successfully!");
  }
});
