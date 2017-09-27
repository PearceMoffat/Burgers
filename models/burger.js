var orm = require("../config/orm.js");
// Burger object, use the orm with more specific attributes
var burger = {
    // Get all burgers from the database
    getAllBurgers : function(cb) {
        orm.selectAll("burgers", function(data){
            cb(data);
        });
    },
    // Add one burger to the database
    addBurger : function(name) {
        orm.insertOne("burgers", "burger_name", name, function(data){
            
        });
    },
    // Update one burgers devoured boolean to true
    eatDaBurger : function(id) {
        orm.updateOne("burgers", "devoured", true, id, function(data){
            
        });
    },
    // Delete one burger from the database
    removeBurger : function(id) {
        orm.removeOne("burgers", "id", id, function(data){
            
        });
    }
}
// Export the burger object
module.exports = burger;