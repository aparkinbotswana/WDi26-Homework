CREATE TABLE origami (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- Always use next available #
  name TEXT,
  creator TEXT,
  image TEXT -- URL for photo
);

-- Seed data
INSERT INTO origami (name, creator) VALUES ('Bottle and Cork', 'Jo Nakashima');
