CREATE TABLE movies_by_keanu (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  release_year TEXT,
  rating INTEGER,
  poster TEXT
);

-- seed data
-- Insert into table. Don't have to fill all fields
INSERT INTO movies_by_keanu (title, release_year) VALUES ('John Wick', '2014');
