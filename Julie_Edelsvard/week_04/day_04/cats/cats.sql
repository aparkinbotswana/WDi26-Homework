CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER,
  breed TEXT,
  image TEXT
);

-- seed data
INSERT INTO cats (name, breed) VALUES ('Lola', 'Burma');
