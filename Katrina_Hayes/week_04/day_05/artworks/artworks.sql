CREATE TABLE artworks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  image TEXT, -- URL to image of artwork
  artist_id INTEGER
);

-- seed data
INSERT INTO artworks (name, year, image) VALUES ('Yellow Pumpkin', 1992, 'https://apse2-uploads2.wikiart.org/images/yayoi-kusama/yellow-pumpkin-1992.jpg');
