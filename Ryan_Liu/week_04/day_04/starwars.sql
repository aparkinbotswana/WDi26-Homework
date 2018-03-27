CREATE TABLE characters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  home_world TEXT,
  film TEXT,
  height INTEGER,
  film_url TEXT
);

-- seed data
INSERT INTO characters (name, home_world, film, height, film_url) VALUES ('Luke Skywalker', 'Tatooine', 'The Empire Strikes Back', 172, 'http://www.imdb.com/title/tt0080684/');
