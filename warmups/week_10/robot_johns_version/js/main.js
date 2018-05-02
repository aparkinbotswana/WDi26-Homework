console.log("connected");
console.log("------------------------------------");
console.log("to use the robot: ");
console.log("a = new Robot ('wall-e')");
console.log("a.right()");
console.log("a.left()");
console.log("a.advance()");
console.log("------------------------------------");
console.log("I've not bound events to the keybard");
console.log("nor stopped the robot from going out of bounds");
console.log("------------------------------------");

const Robot = function(name = "asimov") {
  this.name = name

  this.position = {
    row: 0,
    col: 0
  }
  this.directions = ["east", "south", "west", "north"]
  this.direction = "east"

  $(`.box.row-0.col-0`).html(this.name + ", " + this.direction)

  this.advance = function () {
    $(`.box.row-${this.position.row}.col-${this.position.col}`).html("")
    switch (this.direction) {
      case "east":
        this.position.col ++
        break;
      case "south":
        this.position.row ++
        break;
      case "west":
        this.position.col --
        break;
      case "north":
        this.position.row --
        break;
      default:
    }
    $(`.box.row-${this.position.row}.col-${this.position.col}`).html(this.name + ", " + this.direction)
  }
  this.right = function() {
    let index = this.directions.indexOf(this.direction)
    index = index + 1
    if (index === 4) { index = 0}
    this.direction = this.directions[index]
    $(`.box.row-${this.position.row}.col-${this.position.col}`).html(this.name + ", " + this.direction)
  }
  this.left = function() {
    let index = this.directions.indexOf(this.direction)
    index = index - 1
    if (index === -1 ) { index = 3 }
    this.direction = this.directions[index]
    $(`.box.row-${this.position.row}.col-${this.position.col}`).html(this.name + ", " + this.direction)
  }

}

$(document).ready( ()=> {
  console.log("ready");
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      $('.container').append(`<div class='box row-${i} col-${j}'></div>`)
    }
  }

  // $('.box.row-0.col-0').html("ROBOT")


})
