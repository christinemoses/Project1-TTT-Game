'use strict';

var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var currentPlayer = "x";

$('.block').one('click', function(event) { // one vs on??
  var $this = $(this);
// change the text inside the div
  $this.text(currentPlayer);
  // switch player
  var col = $this.data('col');
  var row = $this.data('row');

  turn(col, row);
  var winner = getWinner();
  if (winner) {
    alert(winner); // change this to a div to hold winner on the page
  }
  console.log(board);

});

var switchPlayer = function() {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
};

// variable to store an event target

var turn = function(col, row){
  if (board[col][row] === '') {
    board[col][row] = currentPlayer;
    switchPlayer();
  }
  else {
    return ("Choose an empty cell");
  }
  return board;
};

// turn(1,2);
// turn(1,1);
// turn(1,2);
// turn(1,1);

var winsRow = function winsRow(player) {
  var sameFirstRow = board[0][0] === player && board[1][0] === player && board[2][0] === player;
  var sameSecondRow = board[0][1] === player && board[1][1] === player && board[2][1] === player;
  var sameThirdRow = board[0][2] === player && board[1][2] === player && board[2][2] === player;

  if (sameFirstRow || sameSecondRow || sameThirdRow) {
    return true;
  } else {
    return false;
  }
};

var isWinner = function isWinner(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
};

var winsColumn = function winsColumn(player) {
  var sameFirstColumn = board[0][0] === player && board[0][1] === player && board[0][2] === player;
  var sameSecondColumn = board[1][0] === player && board[1][1] === player && board[1][2] === player;
  var sameThirdColumn = board[2][0] === player && board[2][1] === player && board[2][2] === player;

  if (sameFirstColumn || sameSecondColumn || sameThirdColumn) {
    return true;
  } else {
    return false;
  }
};

var winsDiagonal = function winsDiagonal(player) {
  var sameFirstDiagonal = board[0][0] === player && board[1][1] === player && board[2][2] === player;
  var sameSecondDiagonal = board[0][2] === player && board[1][1] === player && board[2][0] === player;

  if (sameFirstDiagonal || sameSecondDiagonal) {
    return true;
  } else {
    return false;
  }
};

var getWinner = function getWinner() {
    if (isWinner('x')) {
      return 'Player X Wins!';
    }
    if (isWinner('o')) {
    return 'Player O Wins!';
    }
    if (isTie()) {
      return 'Tie Game!'
    }
    // if (false) {
    //   var checkboard = function(board) {
    //     for(var i = 0; i < board.length; i++) {
    //       if(board[i] != '');
    //     }
    //   }
    // return 'Tie Game!';
    // }
};
