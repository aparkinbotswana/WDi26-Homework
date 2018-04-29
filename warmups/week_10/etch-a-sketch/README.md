## Etch-a-sketch
____

![etch-a-sketch gif](https://media3.giphy.com/media/HkP4KgeuU0AG4/giphy.gif)

The etch-a-sketch used to be the go-to for keeping children entertained back when phones only made phonecalls, iPads weren't an alternative babysitting service, and colours had not yet been invented.

Using the 2 dials on the pad, you could control what was effectively a pixel along an X and Y axis to make pictures - as the pixel moved moved, it left a trail behind it, until the drawing area was reset.

#### Task
____

I don't remember he last time I saw one of these things, entertain me with a small dose of nostalgia by recreating a basic etch-a-sketch in the browser.

To do this:
- Create a canvas element
- On the canvas element, draw a filled rectangle in the center. [See an example here.](https://www.w3schools.com/tags/canvas_fillrect.asp)
- Add an event listener on keypresses, if the key is "W", move the square vertically by the square's height, if it is "A", move one square to the left, "S", down and lastly "D", is to the right. After each move, draw the new position as a new rectangle.

#### Bonus
____
- The square should never be able to venture beyond the edges of the canvas.
- Add a reset button that wipes the canvas.

#### Tips
____

- The top left corner of a canvas is 0 for both axises, counting up to the maximum height (y axis), and maximum width (x axis) of the canvas. Giving your canvas some dimensions and a border will make it easier to see and control: `<canvas width="300" height="300" style="border: 1px solid black"></canvas>`.

- Looking at the example provided in the link above: `ctx.fillRect(20,20,150,100);` -- A rectangle takes the following parameters: ( x, y, number of pixels from X, number of pixels from Y). That line of code draws a box 20px down and in from the top left corner of the canvas, 150px wide, and 100px high.