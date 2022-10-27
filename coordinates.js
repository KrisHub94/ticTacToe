const prompt = require("prompt-sync")();
let playerSymbol = "X";

module.exports = {
  getPlayerMove: function (board) {
    let playerCoordinates = prompt("Coordinates: ");
    let firstIndex = playerCoordinates.slice(0, 1);
    let secondIndex = playerCoordinates.slice(-1);
    while (
      !(firstIndex.toUpperCase() === "A"||
      firstIndex.toUpperCase() === "B" ||
      firstIndex.toUpperCase() === "C") ||
      Number(secondIndex) < 1 ||
      Number(secondIndex) > 3 ||
      playerCoordinates.length !== 2 
      ) 
          {
            playerCoordinates = prompt("Please enter valid Coordinates (A1, C2, etc): ");
            firstIndex = playerCoordinates.slice(0, 1);
            secondIndex = playerCoordinates.slice(-1);
          }
      
    if(firstIndex.toUpperCase() === "A") {
      firstIndex = 0;
    }
    else if(firstIndex.toUpperCase() === "B") {
      firstIndex = 1;
    }
    else if(firstIndex.toUpperCase() === "C") {
      firstIndex = 2;
    }
    
    
    
    if(Number(secondIndex) === 1) {
      secondIndex = 0;
    }
    else if(Number(secondIndex) === 2) {
      secondIndex = 1;
    }
    else if(Number(secondIndex) === 3) {
      secondIndex = 2;
    }
    if (board[firstIndex][secondIndex] === "."){
    board[firstIndex][secondIndex] = playerSymbol;
    }
    else {
      console.log("This spot is already taken");
    }
    /*
        Should return the read coordinates for the tic tac toe board from the terminal.
        The coordinates should be in the format  letter, number where the letter is 
        A, B or C and the number 1, 2 or 3.
        If the user enters an invalid coordinate (like Z0 or 1A, A11, sadfdsaf) 
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters a coordinate that is already taken on the board.
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters the word "quit" in any format of capitalized letters the program
        should stop.
        */
  },

  getRandomAiCoordinates: function (board, current_player) {
    /*
        Should return a tuple of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
  },

  getUnbeatableAiCoordinates: function (board, current_player) {
    /*
        Should return an array of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        The chosen coordinate should always stop the other player from winning or
        maximize the current player's chances to win.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
  },
};

// run this function to test whether you have correctly implemented the other functions
function checkCoordinates() {
  board_1 = [
    ["X", "X", "."],
    ["X", ".", "."],
    ["X", "X", "."],
  ];
  console.log(
    "It should console.log the coordinates selected by the human player"
  );
  coordinates = getPlayerMove(board_1, "X");
  console.log(coordinates);

  board_2 = [
    ["O", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));

  board_3 = [
    ["O", "X", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
  ];
  console.log("The console.loged coordinate should be None");
  console.log(getRandomAiCoordinates(board_3));

  board_4 = [
    [".", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should always be (0, 0)");
  console.log(getUnbeatableAiCoordinates(board_4, "X"));

  board_5 = [
    ["X", "O", "."],
    ["X", ".", "."],
    ["O", "O", "X"],
  ];
  console.log("The console.loged coordinate should always be (1, 1)");
  console.log(getUnbeatableAiCoordinates(board_5, "O"));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("The console.loged coordinate should either (0, 2) or (2, 0)");
  console.log(getUnbeatableAiCoordinates(board_6));
}
