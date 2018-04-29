// These variables just serve to get my canvas and context in the global namespace when they are defined.
// Because they hold no value, I can get away with chaining the definitions together.
let canvas, context;
const draw = {

  pixel: {
    x: 150,
    y: 150,
    size: 10,
    hue: 0
  },


  render: function(){

    // HSLA (or HSL if you don't want opacity) stands for hue/saturation/lightness (and sometimes alpha).
    // Hue is a scale from 0-360 (a full circle on a colour wheel) - if it goes over 360, it just cycles the wheel again, i.e 361 === 1.
    // Saturation refers to how vivid the color is
    // Lightness defines how light or dark the color needs to be, 0% is black, 100% is white, 50% is normal.

    // the context's fillstyle tells it what color to fill in the shape you're drawing.
    context.fillStyle = "hsla( " + this.pixel.hue + ", 100%, 50%, 1 )";

    // Draw a filled rect at: x, y, length along x, length along y
    // x and y refer to the top left of the pixel, the height and width are drawn right and down from those points.
    context.fillRect( this.pixel.x ,this.pixel.y, this.pixel.size, this.pixel.size );
    console.log(this.pixel);
    // After it's drawn, bump the hue up on the pixel so the next pixel is a different color on the sprectrum
    this.pixel.hue += 3;
  },

  move: function( e ){

    // The top left of the canvas is 0 for both axises (x & y)
    // Depending on the key pressed, move the pixel across the canvas by its own width (so it's not overlapping itself)

    if( e.key === "w" && this.pixel.y - this.pixel.size >= 0 ){
      // "w" should move the pixel up the screen by the pixel's size
      // Again, knowing the top left corner is 0, I need to *subtract* from the pixel's y to move up.
      // Also with that 0 value in mind, I want to be sure my pixel can't travel beyond the canvas in that direction ( >= 0);
      this.pixel.y -= this.pixel.size;
    } else if ( e.key === "a" && this.pixel.x - this.pixel.size >= 0 ){
      this.pixel.x -= this.pixel.size;
    } else if ( e.key === "s" && this.pixel.y + this.pixel.size < canvas.height ){
      this.pixel.y += this.pixel.size;
    } else if ( e.key === "d" && this.pixel.x + this.pixel.size < canvas.width ){
      this.pixel.x += this.pixel.size;
    } else {
      return;
    }
    this.render();
  }
};

document.addEventListener('DOMContentLoaded', function(){
// document.addEventListener('DOMContentLoaded', function(){} is the same as document.ready in jQuery.

    // Grab the canvas element and set the context.
  canvas = document.querySelector('canvas');
  
  // The CanvasRenderingContext2D interface is used for drawing rectangles, text, images and other objects onto the canvas element. 
  // It provides the 2D rendering context for the drawing surface of a <canvas> element.
  context = canvas.getContext('2d');

  // Render the first block immediately
  draw.render();

  // Because I am adding an event listener to an element, this needs to be 
  document.querySelector('button').onclick = function(){

    // clearRect is almost the same as drawing a rectangle on the canvas, except that it destroys the content, rather than creating any.
    context.clearRect( 0, 0, canvas.width, canvas.height );
  };

// Listen for any keypress, if one is hit, pass it to the "draw.move" function with the event data, so we can work out the keypress.
  window.onkeypress = function( event ){
    draw.move( event );
  }
}, false);
