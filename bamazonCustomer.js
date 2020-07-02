var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("table").table;

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
  displayInventory();
    
    //connection.end();
  });

function displayInventory() {
   connection.query("SELECT * FROM products", function(err, res){
       if (err) throw err;
       var data = res.map(res => [`ID: ${res.item_id}`, res.product_name, `$ ${res.price}`]);
       console.log(`Here's the available inventory...\n\n${table(data)}`);
       custOrder();
   })
    //connection.end();
}

function custOrder() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Enter the product id of the item you would like to order",
        filter: Number
    }, {
        name: "quantity",
        type: "input",
        message: "How many would you like?",
        filter: Number
    },

    ]).then(function(answers){
        var orderQuantity = answers.quantity;
        var orderID = answers.id;
        inventoryQuantity(orderID, orderQuantity);
    })
};

function inventoryQuantity(id, orderAmount){
    connection.query('Select * From products WHERE item_id = ' + id, function (err, res){
        if(err){console.log(err)};
        if (orderAmount <= res[0].stock_quantity){
            var totalCost = res[0].price * orderAmount.toFixed(2);
			console.log("Your total cost for " + orderAmount + " " +res[0].product_name + " is " + totalCost + " Thank you!");
            
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + orderAmount + " WHERE item_id = " + id);
		} else{
			console.log("Insufficient quantity " + res[0].product_name + " to complete your order.");
		};
		custOrder();
        }
)}






    

