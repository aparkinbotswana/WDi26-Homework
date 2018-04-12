CREATE TABLE whiskys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  origin TEXT,
  image TEXT
);

--seed data

INSERT INTO whiskys (name, origin) VALUES ('Yamazaki', 'Japan');
