drop database if exists bamazon;
create database bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT(10) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NULL,
	department_name VARCHAR(100) NULL,
	cost DECIMAL(10,2) NOT NULL,
    quantity INT(10) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('ipod nano', 'tech', 150.00, 20);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('gameboy color', 'tech', 100.00, 5);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('8 GB RAM', 'tech', 79.00, 3);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('250 GB SSD', 'tech', 170.00, 2);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('whoopie Cushion', 'joke', 2.00, 20);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('Yo-Yo', 'toys', 5.00, 20);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('dog treats', 'pet supplies', 7.99, 35);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('deer antler', 'pet supplies', 25.99, 15);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('Godiva', 'food', 2.00, 40);

INSERT INTO products (product_name, department_name, cost, quantity)
VALUES ('copy paper', 'office supplies', 10.00, 30);


SELECT * FROM products;
