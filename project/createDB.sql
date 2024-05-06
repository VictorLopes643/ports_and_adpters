DROP SCHEMA IF EXISTS ProductsPAD;

CREATE SCHEMA ProductsPAD;

CREATE TABLE ProductsPAD.products (
    product_id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL
);
