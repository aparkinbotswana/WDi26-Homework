CREATE TABLE dogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  breed TEXT,
  origin TEXT,
  temperament TEXT,
  image TEXT
);

--seed data

INSERT INTO dogs (breed, origin, temperament) VALUES ('Labrador Retriever', 'Newfoundland', 'Even tempered');
