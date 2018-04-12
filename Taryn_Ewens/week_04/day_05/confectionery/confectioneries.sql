CREATE TABLE confectioneries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  description TEXT,
  ingredients TEXT,
  category_id INTEGER
);

INSERT INTO confectioneries (name, description) VALUES ('Marshmallows', 'Flavourful, soft, pillows of deliciousness. Handmade and handcut in a variety of flavours such as raspberry, passionfruit, mango, blueberry, creamy orange, strawberry, lemon, lime, guava, vanilla, peppermint, rosewater, lychee rose, brown sugar & cinnamon, and more!');
