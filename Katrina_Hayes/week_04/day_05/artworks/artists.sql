CREATE TABLE artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year_of_birth INTEGER,
  nationality TEXT,
  image TEXT -- URL for photo of artist
);

-- seed data
INSERT INTO artists (name, year_of_birth, nationality, image) VALUES ('Yayoi Kusama', 1929, 'Japanese', 'https://apse2-uploads8.wikiart.org/temp/2a72675f-d09a-4d55-a390-3060fae0a164.jpg!Portrait.jpg'); 
