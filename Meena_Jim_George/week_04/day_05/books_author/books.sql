CREATE TABLE books(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  published TEXT,
  book_cover TEXT,
  author_id INTEGER
);
INSERT INTO books (name, published,book_cover,author_id)
VALUES('Room on the broom','2000','https://images-na.ssl-images-amazon.com/images/I/81f-ban%2B7nL.jpg',1);
