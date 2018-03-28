CREATE TABLE sports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  sport TEXT,
  players TEXT,
  image TEXT
);

-- seed data
INSERT INTO sports (sport, players) VALUES ('football', '11');
