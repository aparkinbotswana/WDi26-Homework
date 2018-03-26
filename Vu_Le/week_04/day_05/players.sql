CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  position TEXT,
  image TEXT,
  team_id INTEGER
);

--seed data
INSERT INTO players (name, position) VALUES ('Jayson Taytum','SF');
