import React from 'react';
import ReactDOM from 'react-dom'; //what is ReactDOM? - a different library to react (this functionality was previously part of the react library prior to React Native) - it is the glue between React and the DOM
import './index.css';


function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

//React supports a simpler syntax called functional components (that would only consist of a render method)
//The onClick prop on the the built-in DOM <button> component tells React to set up a click event listener.
//When the button is clicked, React will call the onClick event handler.
//The event handler calls props.onClick. The Square's props were specified by the Board.


class Board extends React.Component {
  renderSquare(i) {
    return (
    <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)} //the Board passed this line of code to Square, so when called it runs the handleClick function on the Board
     />
  );
}

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]){
      return; //this ignores the click if someone has already won the game or if a square is already filled
    }
    squares[i] = this.state.xIsNext ? 'X' : '0';
    this.setState({
      history: history.concat([{
        squares // same as: {squares: squares}
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  //call slice to copy the squares array instead of mutating the existing array
  //this replaces the data with a  new copy of the object that also includes desired changes (rather than directly changing the values of a variable).
  //you can assign a new object to a variable which is stored within a new variable by using Object.assign({}, variable, {object to be assigned to variable})
  //avoiding data mutations lets us keep a reference to older versions of the data, and switch between them if we need to.
  //the handleClick function flips the boolean value of xIsNext.

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map( (step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

//the Game render method stores an object like this in state:
// history = [
//  {
//   squares: [
//     null, null, null,
//     null, null, null,
//     null, null, null,
//   ]
// },
//  {
//    squares: [
//      null, null, null,
//      null, 'X', null,
//      null, null, null,
//      ]
//    },
//  ]


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


//how does this function work? by mapping out all possible winning combinations in an array.

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i=0; i<lines.length; i++){
    const[a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}


// TODO:
// 1. Display the location for each move in the format (col, row) in the move history list.
// 2. Bold the currently selected item in the move list.
// 3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
// 4. Add a toggle button that lets you sort the moves in either ascending or descending order.
// 5. When someone wins, highlight the three squares that caused the win.
// 6. When no one wins, display a message about the result being a draw.
