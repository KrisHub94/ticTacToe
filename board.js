const prompt = require("prompt-sync")();
module.exports = {
  getEmptyBoard: function () {
    return [[".",".","."],[".",".","."],[".",".","."]];
  },
  
  displayBoard: function (board) {
    let displayedBoard = `      1   2   3
  A   ${board[0][0]} | ${board[0][1]} | ${board[0][2]} 
     ---+---+---
  B   ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
     --+---+----
  C   ${board[2][0]} | ${board[2][1]} | ${board[2][2]} 
     --+---+----`;
  console.log(displayedBoard);
  },

  isBoardFull: function (board) {
      let boardJoin = board.join();
      while (boardJoin.includes(".")){
        return false;
      } 
       return true;
    
      },
  

  getWinningPlayer: function (board) {
    
    return[

      board[0][0]=== "X"  && board[0][1]=== "X" && board[0][2]=== "X",
          
        
       board[1][0]=== "X" && board[1][1]=== "X" && board[1][2]=== "X",
         
        
       board[2][0] === "X"&& board[2][1]=== "X" && board[2][2]=== "X",
          
        
        board[0][0]=== "X" && board[1][0]=== "X" && board[2][0]=== "X",
          
        
       board[0][1]=== "X" && board[1][1]=== "X" && board[2][1]=== "X",
        
       
       board[0][2] === "X"&& board[1][2]=== "X" && board[2][2]=== "X",

       board[0][0] === "X" && board[1][1]=== "X" && board[2][2]=== "X",
        
       board[2][0] === "X"&& board[1][1] === "X"&& board[0][2]=== "X",
         
    
    
      board[0][0] === "O" && board[0][1]=== "O" && board[0][2]=== "O",

      board[1][0] === "O"&& board[1][1]=== "O" && board[1][2]=== "O",
          
      board[2][0]=== "O" && board[2][1]=== "O" && board[2][2]=== "O",
          
        
      board[0][0]=== "O" && board[1][0]=== "O" && board[2][0]=== "O",
          
      board[0][1]=== "O" && board[1][1]=== "O" && board[2][1]=== "O",
        
       
       board[0][2]=== "O" && board[1][2]=== "O" && board[2][2]=== "O",
        
       
       board[0][0]=== "O" && board[1][1]=== "O" && board[2][2]=== "O",
        
        
       board[2][0] === "O"&& board[1][1]=== "O" && board[0][2]=== "O",
          
        
      ].includes(true)
    /*
      Should return the player that wins based on the tic tac toe rules.
      If no player has won, than "None" is returned.

      */
    
  },
};

// run this function to test whether you have correctly implemented the other function
function checkBoards() {
  let board = getEmptyBoard();
  console.log(board);

  board = [["X", "O", "."], ["X", "O", "."][("0", "X", ".")]];

  console.log(`Should give out:"

        1   2   3
    A   X | O | . 
       ---+---+---
    B   X | O | .
       ---+---+---
    C   0 | X | . 
       ---+---+---`);
  displayBoard(board);

  board_1 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return False");
  console.log(isBoardFull(board_1));

  board_2 = [
    [".", "O", "O"],
    [".", "O", "X"],
    [".", "X", "X"],
  ];
  console.log("Should return False");
  console.log(isBoardFull(board_2));

  board_3 = [
    ["O", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ];
  console.log("Should return True");
  console.log(isBoardFull(board_3));

  board_4 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return X");
  console.log(getWinningPlayer(board_4));

  board_5 = [
    ["X", "O", "O"],
    ["X", "O", "."],
    ["O", "X", "X"],
  ];
  console.log("Should return O");
  console.log(getWinningPlayer(board_5));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("Should return None");
  console.log(getWinningPlayer(board_6));
}
//checkBoards();