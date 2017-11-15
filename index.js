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
    // console.log(res);
    console.log('Welcome to Bamazon, we have the following items in stock');

    for (let i = 0; i < res.length; i++){
      console.log('--------------------------------------------------------------');
      console.log(`id: ${res[i].item_id}, product name: ${res[i].product_name}, department name: ${res[i].department_name}, cost: $${res[i].cost}, quantity: ${res[i].quantity}`);

    }

    console.log('--------------------------------------------------------------');

    purchase();
    // connection.end();
  });
} 

function purchase() {

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
    // console.log(answer);
    // console.log(parseInt(answer.id));
  });
  // connection.end();
};

//read from database for selected ID and quantity
//if quantity available is less than quantity selected console.log insufficient quantity
//if quantity available is less than quantity selected update table with available - selected
//console.log cost

