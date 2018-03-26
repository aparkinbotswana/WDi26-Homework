Given the position of two queens on a chess board, indicate whether or not they are positioned so that they can attack each other.

In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

So if you're told the white queen is at (4, 3) and the black queen at (4, 6), then you'd know you've got a set-up like so:

Play around with your data structure to make sure you can detect an attack in the same row, column and diagonal.


`1. _  _  _  _  _  _  _  _`

`2. _  _  _  _  _  _  _  _`

`3. -  -  -  W  -  -  -  -`

`4. -  -  -  -  -  -  -  -`

`5. -  -  -  -  -  -  -  -`

`6. -  -  -  B  -  -  -  -`

`7. -  -  -  -  -  -  -  -`

`8. -  -  -  -  -  -  -  -`
