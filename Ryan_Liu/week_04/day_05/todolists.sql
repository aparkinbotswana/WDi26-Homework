CREATE TABLE todolists(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  list_name TEXT,
  tag TEXT
);

INSERT INTO todolists (list_name, tag) VALUES ("birthday party", "personal");
