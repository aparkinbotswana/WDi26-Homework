CREATE TABLE trainers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  poke_id INTEGER
);
-- seed data

INSERT INTO trainers (name) VALUES ('Ash');


CREATE TABLE pokes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  pokemon_type TEXT,
  image TEXT
);

INSERT INTO pokes (name, pokemon_type) VALUES ('Pikachu', 'Electric');
