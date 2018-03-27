CREATE TABLE virtuals (
  id INTEGER PRIMARY KEY,
  name TEXT,
  gadgets TEXT,
  image TEXT
);

CREATE TABLE applications (
  id INTEGER PRIMARY KEY,
  name TEXT,
  image TEXT,
  virtuals_id INTEGER
);

INSERT INTO virtuals (name, gadgets) VALUES ('medical','headset');
INSERT INTO virtuals (name, gadgets) VALUES ('car','headset');
INSERT INTO virtuals (name, gadgets) VALUES ('education','goggles');


INSERT INTO applications (name ) VALUES ('medical');
INSERT INTO applications (name ) VALUES ('education');
