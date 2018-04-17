CREATE TABLE snes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  producer TEXT,
  year INTEGER,
  image TEXT,
  video TEXT
);

-- seed data
INSERT INTO snes (name, producer) VALUES ('Super Mario Kart', 'Nintendo');
