CREATE TABLE styles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    origin TEXT,
    popularity TEXT
);

--seed data
INSERT INTO styles (name, origin, popularity) VALUES ('dark', 'British', 'high');
