CREATE TABLE comics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    nationality TEXT,
    age INTEGER,
    image TEXT
);

-- seed data
INSERT INTO comics (name, nationality, age, image) VALUES ('Ricky Jervais', 'UK', 42, 'https://s-media-cache-ak0.pinimg.com/originals/67/64/08/6764089480fbf37e1a66eb07940b6254.jpg');