CREATE TABLE galaxies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT,
  image TEXT -- URL for a photo
);

INSERT INTO galaxies (name, type) VALUES ('Andromeda', 'Spiral Galaxy');
