CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  image TEXT
);

INSERT INTO categories (name, description) VALUES ('Candy', 'For the young and young at heart - think toffees, caramels, marshmallows, honeycomb, fruit jellies, etc.');

INSERT INTO categories (name, description) VALUES ('Cakes', 'Cakes for a special occasion, or just because you deserve it!');
