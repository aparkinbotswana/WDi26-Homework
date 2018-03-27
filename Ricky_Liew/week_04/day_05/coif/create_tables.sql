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

CREATE TABLE houses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  seat TEXT,
  house_type TEXT,
  words TEXT,
  sigil_url TEXT
);
