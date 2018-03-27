CREATE TABLE consoles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  company TEXT,
  image TEXT
);

-- seed data

INSERT INTO consoles (name, company) VALUES ("Playstation 4", "Sony");
