CREATE TABLE synthesisers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  model TEXT,
  make TEXT,
  type TEXT,
  year INTEGER,
  image TEXT
);

-- seed data
INSERT INTO synthesisers (model, make, type) VALUES ('Microbrute', 'Arturia', 'analog');