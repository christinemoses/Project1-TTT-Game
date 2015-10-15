'use strict';

var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

var currentPlayer = "x";

$('.block').on('click', function() { // one vs on??
  var $this = $(this);
  var col = $this.data('col');
  var row = $this.data('row');

  turn($this, col, row);
  var winner = getWinner();
  if (winner) {
    $('.alert').text(winner);
  }
  console.log(board);

});

// Reset the arrray and remove 'X' and  'O' from each block
var reset = function() {

  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  $('.block').html('')
};



var switchPlayer = function() {
  if (currentPlayer === "x") {
    currentPlayer = "o";
  } else {
    currentPlayer = "x";
  }
};

// variable to store an event target

var turn = function($this, col, row){

  if (board[col][row] === '') {
    $this.text(currentPlayer);
    board[col][row] = currentPlayer;
    switchPlayer();
  }
  else {
    return ("Choose an empty cell");
  }
  return board;
};

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

var isBoardFull = function isBoardFull() {
  for (var i = 0, imax = board.length; i < imax; i++) {
    for (var j = 0, jmax = board[i].length; j < jmax; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
};

var isTie = function isTie() {
  // if all turns are completed and all blocks are full, and there is no winner, it must be a tie
  return isBoardFull()
};

var getWinner = function getWinner() {
  var msg = '';
  if (isWinner('x')) {
    reset();
    msg ='Player X Wins!';
  }else if(isWinner('o')) {
    reset();
    msg = 'Player O Wins!';
  }else if(isTie()) {
    reset();
    msg = 'Tie Game!'
  }else {
      // no Winner
  }

  return msg;
};
