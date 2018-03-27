CREATE TABLE board_games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  gname TEXT,
  gtype TEXT,
  gscore INTEGER,
  gimage TEXT -- URL for a photo of the game
);

-- seed data
INSERT INTO board_games (gname, gtype, gscore, gimage) VALUES ('Settlers of Catan', 'Family', 7, 'https://i.frg.im/4o5uXcD/191683707936-1.jpg');

