var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Password",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  
    
    connection.end();
  });


// function displayProducts() {
//     var query = "SELECT * FROM products";
//     connection.query(query, function (err, res) {
//         var data = res.map(res => [`ID: ${res.id}`, res.product_name, `$ ${res.price}`]);
//         console.log(`Here are the available items...\n\n${table(data)}`);
//         var length = res.length;
//         console.log(length);
//         //userOrder(length);
//     });
    // connection.end();
//}