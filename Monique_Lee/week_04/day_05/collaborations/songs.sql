CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  released INTEGER,
  company TEXT,
  clip TEXT
);

--seed data

INSERT INTO songs (name) VALUES ('Uptown Funk');
