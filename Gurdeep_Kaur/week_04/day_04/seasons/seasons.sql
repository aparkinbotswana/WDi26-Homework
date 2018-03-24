CREATE TABLE Seasons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  month TEXT,
  image TEXT -- url for a photo of a season
);
--seed data
INSERT INTO Seasons (name, month) VALUES ('Spring','April');
