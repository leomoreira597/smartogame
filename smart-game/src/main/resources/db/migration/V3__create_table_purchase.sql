CREATE TABLE purchase(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT,
    FOREIGN KEY (id_product) REFERENCES products(id)
);