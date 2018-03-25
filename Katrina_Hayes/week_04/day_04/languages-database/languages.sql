CREATE TABLE languages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  nativeName TEXT,
  family TEXT,
  livingDead TEXT, -- is it living or dead?
  map TEXT -- url for map of where spoken
);

-- seed data
INSERT INTO languages (id, name, nativeName, family, livingDead) VALUES (1, 'Japanese', 'Nihongo', 'Japonic', 'living');
INSERT INTO languages VALUES (2, 'Basque', 'Euskera', 'language isolate', 'living', 'https://en.wikipedia.org/wiki/Basque_language#/media/File:Euskalkiak.svg');
