var mysql = require("mysql");
var keys = require("../keys.js");
// Connection variable
var connection = mysql.createConnection({
  host: "localhost",
  user: keys.user,
  password: keys.pass,
  database: "burgers_db"
});
// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export the connection
module.exports = connection;