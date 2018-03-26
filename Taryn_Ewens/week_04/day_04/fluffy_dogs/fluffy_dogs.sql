CREATE TABLE fluffy_dogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  breed TEXT,
  origin TEXT,
  image TEXT
);

-- Seed Data

INSERT INTO fluffy_dogs (breed, origin, image) VALUES ('Samoyed', 'Northwest Russia and Western Siberia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/11.10.2015_Samoyed.jpg/1280px-11.10.2015_Samoyed.jpg');
