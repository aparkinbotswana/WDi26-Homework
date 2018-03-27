CREATE TABLE todoitems(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT,
  todolist_id INTEGER
);

INSERT INTO todoitems (item_name, todolist_id) VALUES ("Pick up gift", 1);
