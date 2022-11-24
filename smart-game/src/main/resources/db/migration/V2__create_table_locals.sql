CREATE TABLE locals(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    id_products int,
    FOREIGN KEY (id_products) REFERENCES products(id)
);
