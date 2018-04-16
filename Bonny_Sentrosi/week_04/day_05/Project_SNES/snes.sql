CREATE TABLE snes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    year INTEGER,
    video TEXT, -- url for video
    image TEXT
);

INSERT INTO snes (name, year) VALUES ('Super Mario Kart', 1992);
