CREATE DATABASE series_db;

USE series_db;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE series (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    category_id INT,
    director VARCHAR(100) NOT NULL,
    main_actor VARCHAR(100) NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES 
('Drama'),
('Comedy'),
('Thriller');

INSERT INTO series (title, category_id, director, main_actor) VALUES 
('Greys Anatomy', 1, 'Shonda Rhimes', 'Ellen Pompeo'),
('The Big Bang Theory', 2, 'Chuck Lorre', 'Jim Parsons'),
('The Good Place', 2, 'Michael Schur', 'Kristen Bell'),
('Prison Break', 3, 'Paul Scheuring', 'Wentworth Miller');

SELECT * FROM series;

SELECT * FROM series WHERE id = 2;

INSERT INTO series (title, category_id, director, main_actor)
VALUES  ('Lupin', 3, 'Louis Leterrier', 'Omar Sy');