CREATE TABLE kittens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER,
  image TEXT -- URL image
);

-- seed data:
INSERT INTO kittens (name, age) VALUES ('Gary', '1');
INSERT INTO kittens (name, age) VALUES ('Monster', '12');
