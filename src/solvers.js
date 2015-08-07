/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var board = new Board({'n':n});
  var rows = board.rows();
  for (var i = 0; i < rows.length; i++){
    rows[i][i] = 1; 
  }
  return rows;
}



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //debugger;
  var solutionCount = 0; //fixme
  var board = new Board({
    'n': n
  });
  var solutionFinder = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        solutionFinder(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  solutionFinder(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({
    'n': n
  });
  var solutionFinder = function(row) {
    if (row === n) {
      solutionCount++;
      return board.rows();
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        solutionFinder(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  solutionFinder(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if(n === 0){return 1};
  if(n === 2 || n === 3){return 0};
  var solutionCount = 0; //fixme
  var board = new Board({
    'n': n
  });
  var solutionFinder = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        solutionFinder(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  solutionFinder(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


//---------------------------------

// var queensBoard = function(n) {
//   board = [];
//   for (var i = 0; i < n; i++) {
//     var row = [];
//     for (var j = 0; j < n; j++) {
//       row.push(0);
//     }
//     board.push(row);
//   }
//   return board;
// };

// var placeQueen = function(row, board, minCol) {
//   n = board.length;
//   col = minCol || 0;
//   for (col; col < n; col++) {
//     if (board[row][col] === 0) {
//       board[row][col] = 1;
//       for (var downThreat = row + 1; downThreat < n; downThreat++) {
//         board[downThreat][col] = board[downThreat][col] - 1;
//       }
//       var majThrCol = col;
//       var majThrRow = row;
//       var minThrCol = col;
//       var minThrRow = row;
//       while (majThrRow < n - 1 && majThrCol < n - 1) {
//         majThrCol++;
//         majThrRow++;
//         board[majThrRow][majThrCol] = board[majThrRow][majThrCol] - 1;
//       }
//       while (minThrRow < n - 1 && minThrCol >= 0) {
//         minThrCol--;
//         minThrRow++;
//         board[minThrRow][minThrCol] = board[minThrRow][minThrCol] - 1;
//       }
//       break;
//     }
//   }
//   return board;
// };