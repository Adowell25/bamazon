DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within animals_db --
CREATE TABLE products (
  -- Creates a numeric column called "item_id" which will automatically increment its default value as we create new rows --
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(255) NOT NULL,
  -- Makes a boolean column called "department_name" which cannot contain null --
  department_name VARCHAR(255) NOT NULL,
  -- Makes a sting column called "price" --
  price DECIMAL (10,2)NULL,
  -- Makes an numeric column called "stock_quantity" --
  stock_quantity INTEGER
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Belle Gloss", "Wine/Spirits", 55.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Wine Opener", "Home Goods", 8.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Bottle Rack", "Home Goods", 18.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Deluxe Fishing Rod", "Sporting Goods", 75.99, 10);

     INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Basketball", "Sporting Goods", 24.99, 10);

     INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Suitcase", "Travel", 97.99, 10);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Duffle Bag", "Travel", 16.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Briefcase", "Travel", 81.97, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Beats By Dre", "Electronics", 39.99, 10);

    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES
        ("Vizio Sound Bar", "Electronics", 129.99, 10);