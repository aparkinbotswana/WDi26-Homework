CREATE TABLE characters(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  death_season INTEGER,
  death_ep INTEGER,
  death_time DATETIME,
  death_how TEXT,
  profile_url TEXT,
  thumbnail_url TEXT
);
