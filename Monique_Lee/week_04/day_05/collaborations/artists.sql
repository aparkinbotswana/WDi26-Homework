CREATE TABLE artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  website TEXT,
  song_id INTEGER
);

-- seed data
INSERT INTO artists (name) VALUES ('Mark Ronson');
