const player1 = "X";
const player2 = "0";

let p1arry = [];
let p2arry = [];

let win = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [2,4,7],
  [2,5,8]
];

const startgame = function () {
  $('.box').html('');
}


// winChecker if X or 0 = any array in win then say X/0 wins



// when user gets on page reset board.
$( document ).ready(function (){
  startgame();

    $('.box').click(function () {
      $(this).html(player1);
      p1arry.push($('.box').attr("id"));
      console.log(p1arry);

    })

});








// when user1 clicks on box draw x




// when user 2 clicks on box draw 0





// if all spaces are filled and no win write game is draw
