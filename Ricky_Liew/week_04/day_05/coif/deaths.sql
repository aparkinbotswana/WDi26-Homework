CREATE TABLE deaths (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  death_season INTEGER,
  death_ep INTEGER,
  death_time DATETIME,
  death_how TEXT,
  char_url TEXT
);

-- seed data
INSERT INTO char_death_tbl (name, death_season, death_ep, death_time, death_how, char_url)
VALUES ('Waymar Royce', '1','1','05:52','Killed by White Walker','http://gameofthrones.wikia.com/wiki/Waymar_Royce');
