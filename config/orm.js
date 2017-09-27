var connection = require("./connection.js");

var orm = {
    // Select all data from a table
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            callback(result);
        });
    },
    // Insert one row into a table
    insertOne: function(table, col_names, val_names, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col_names, val_names], function(err, result){
            callback(result);
        });
    },
    // Update one row from a  table
    updateOne: function(table, col_name, value, id, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, col_name, value, id], function(err, result){
            callback(result);
        });
    },
    // Remove one row from a table
    removeOne: function(table, col_name, value, callback) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, col_name, value], function(err, result){
            callback(result);
        })
    }
};

module.exports = orm;