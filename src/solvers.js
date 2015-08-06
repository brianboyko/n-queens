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
  var solutions = []; //fixme
  var rookMoveStack = [];
  var board = new Board({
    'n': n
  }); // A square is board.get(r)[c]?
  var r = 0; // let's start at the very beginning
  var c = 0; // it's a very good place to start.
  for (r; r < n; r++) { // note we are not redefining r.
    for (c; c < n; c++) { // nor c.
      console.log(board.get(r), 'before');
      board.togglePiece(r,c); // test;
      console.log(board.get(r), 'after');
      console.log(board.hasAnyRooksConflicts());
      if (board.hasAnyRooksConflicts()) { // <<---- I THINK THE PROBLEM IS HERE
        // test is bad;
          board.togglePiece(r,c); // remove piece
      } else {
        rookMoveStack.push([r, c]); // let's try this one. 
        console.log(JSON.stringify(rookMoveStack));
        c = n; // skip to the next row. 
      }
      console.log(board.get(r), 'after');
    } // end c loop
    if (rookMoveStack.length < r) {
      var badMove = rookMoveStack.pop(); // get the last move we did, that was obviously a bad move.
      board.togglePiece(badMove[0],badMove[1]); // remove the last move piece from the board.
      r = badMove[0]; // start the count over again
      c = badMove[1]; // beginning from the next square over from the last bad move. 
    }
  } // end r loop
  console.log(board);
  solutions.push(board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));
  return solutions[0];
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


