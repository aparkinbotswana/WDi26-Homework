Given a diagram, determine which plants each child in the kindergarten class is responsible for.

The kindergarten class is learning about growing plants. The teacher (Mr Theo) thought it would be a good idea to give them actual seeds, plant them in actual dirt, and grow actual plants.

They've chosen to grow grass (G), clover (C), radishes (R), and violets (V).

To this end, the children have put little cups along the window sills, and planted one type of plant in each cup, choosing randomly from the available types of seeds.

`[window][window][window]`

`........................ # each dot represents a cup`

`........................`

There are 12 children in the class:

Joel, John, Julie, Monique, Ricky, Austin, Meena, Sam, Joseph, Abdul, Vu, and Mandy.

Each child gets 4 cups, two on each row. Mr Theo assigns cups to the children alphabetically by their names.

The following diagram represents Abdul's plants:

`[window][window][window]`

`VR......................`

`RG......................`

In the first row, nearest the windows, he has a violet and a radish. In the second row he has a radish and some grass.

Your program will be given the plants from left-to-right starting with the row nearest the windows. From this, it should be able to determine which plants belong to each student.

Setup your garden like so:

`VRCGVVRVCGGCCGVRGCVCGCGV`

`VRCCCGCRRGVCGCRVVCVGCGCV`

Then you will know that if asked for Abdul's plants, it will provide:

* Violets, radishes, violets, radishes

While asking for Austin's plants would yield:

* Clover, grass, clover, clover

**Remember, every child is assigned two plants in each row, alphabetically.**
