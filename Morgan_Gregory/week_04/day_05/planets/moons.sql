CREATE TABLE moons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  planet_id INTEGER
);

INSERT INTO moons (name) VALUES ('Titan');
