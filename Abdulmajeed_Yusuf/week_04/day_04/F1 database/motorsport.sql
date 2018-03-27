CREATE TABLE motorsport (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  team TEXT,
  num INTEGER,
  image TEXT
);

--seed data
INSERT INTO motorsport (name, team, num, image) VALUES ('Lewis Hamilton', 'Mercedes', 44);
