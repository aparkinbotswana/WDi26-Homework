CREATE TABLE flowers(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  family TEXT,
  image TEXT 
);
--seed data
INSERT INTO flowers(name,family) VALUES('Rose','Rosaceae');
