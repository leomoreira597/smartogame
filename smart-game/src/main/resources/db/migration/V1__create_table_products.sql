CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(300) NOT NULL,
    price DOUBLE NOT NULL,
    plataform VARCHAR(300)
);
