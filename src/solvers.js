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

window.findNRooksSolution = function(n, lastR, lastC) {
  var solution = undefined; //fixme
  var rookMoveStack = [];
  var board = new Board({'n': n});   // A square is board[r][c]?
  var r = 0;  // let's start at the very beginning
  var c = 0;  // it's a very good place to start.

  for(r = 0; r < n; r++){
    for(c = 0; c < n+1; c++){
      if(c === n+1){ // if at the end of the column, and can't place a rook. 
        var badLastMove = rookMoveStack.pop(); // the last piece was placed wrong. 
        board.get(badLastMove[0])[badLastMove[1]] = 0; // remove that piece.
        r = badLastMove[0]; //set the row equal to the row of the last bad move. 
        c = badLastMove[1]+1; // then try the next piece after the bad last move. 
      } else if (!board.hasAnyRooksConflicts()) {
        board.get(r)[c] = 1; // place the piece
        rookMoveStack.push([r,c])// store this move in a stack.
        r++; // move to the next row.
        c = 0; // start at the first column. 
      }
    }
  }
  solution = board;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


