CREATE TABLE games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  company TEXT,
  image TEXT,
  console_id INTEGER
);
-- seed data 
INSERT INTO games (name, year, company) VALUES ("Horizon: Zero Dawn", "2017", "Fuckface");
