var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");


var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showStock();
});

function showStock() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log('Welcome to Bamazon, we have the following items in stock');

    for (let i = 0; i < res.length; i++){
      console.log('--------------------------------------------------------------');
      console.log(`id: ${res[i].item_id}, product name: ${res[i].product_name}, department name: ${res[i].department_name}, cost: $${res[i].cost}, quantity: ${res[i].quantity}`);

    }

    console.log('--------------------------------------------------------------');

    prompt();
  });
} 

function prompt() {

  inquirer.prompt([{
      name: "id",
      type: "input",
      message: "What is the ID of the item you would like to buy?"
    },
    {
      name: "quantity",
      type: "input",
      message: "How many of this item would you like to purchase?"
  }]).then(function(answer) {
    var quantity = parseInt(answer.quantity);
    var id = parseInt(answer.id);
    readProducts(id, quantity);
  });
};


function readProducts(id, quantity) {
  connection.query(`SELECT * FROM products WHERE item_id = ${id}`, function(err, res) {
    if (err) throw err;

    if (quantity > res[0].quantity){
      console.log('There is insufficient quantities in stock!!!');
      connection.end();
    } else {
      var cost = res[0].cost * quantity;
      quantity = res[0].quantity - quantity;
      updateProduct(id, quantity, cost);
    }
  });
}

function updateProduct(id, quantity, cost) {
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: quantity
      },
      {
        item_id: id
      }
    ],
    function(err, res) {
      if (err) throw err;
        console.log('Your order was successfully processed, you can expect to recieve it never');
        console.log('Total cost: $', cost);
        console.log('---------------------------------------------------');
        showStock();
    }
  );
}

