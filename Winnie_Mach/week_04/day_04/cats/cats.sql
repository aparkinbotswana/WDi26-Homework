CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  breed TEXT,
  dob TEXT,
  image TEXT -- url of image of cat.
);

-- seed data
INSERT INTO cats (name, breed, dob) VALUES ('9', 'Domestic Short Hair', '1st Jan');
