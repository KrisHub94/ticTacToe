const prompt = require("prompt-sync")();

module.exports = {
  changePlayer: function (symbol) {
    if (symbol === "X"){
      return "O";
    }
    else if (symbol === "O") {
      return "X";
    }
  },
  getPlayerMove: function (board, symbol) {
    let playerCoordinates = prompt("Coordinates: ");
    if (playerCoordinates.toLowerCase() === "quit") {
      console.log("Thank you for playing!");
      process.exit();
    }
    
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
      board[firstIndex][secondIndex] = symbol;
      return true   
    }
    else {
      console.log("This spot is already taken");
      return false
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


  getRandomAiCoordinates: function (board, symbol) {
    let firstIndex = Math.floor(Math.random() * 3);
    let secondIndex = Math.floor(Math.random() * 3);
    if (board[firstIndex][secondIndex] === ".") {
      board[firstIndex][secondIndex] = symbol;
      return true;
    }
    else {
      return false;
    }
  },

  getUnbeatableAiCoordinates: function (board, symbol) {
    let firstIndex;
    let secondIndex;
    if ((board[0][0] === "O" && board[0][1] === "O" && board[0][2] === ".") ||
    (board[0][0] === "X" && board[0][1] === "X" && board[0][2] === ".")) {
      firstIndex = 0;
      secondIndex = 2;
    }
    else if ((board[0][0] === "O" && board[0][1] === "." && board[0][2] === "O") ||
    (board[0][0] === "X" && board[0][1] === "." && board[0][2] === "X")) {
      firstIndex = 0;
      secondIndex = 1;
    }
    else if ((board[0][0] === "." && board[0][1] === "O" && board[0][2] === "O") ||
    (board[0][0] === "." && board[0][1] === "X" && board[0][2] === "X")) {
      firstIndex = 0;
      secondIndex = 0;
    }
    else if ((board[1][0] === "O" && board[1][1] === "O" && board[1][2] === ".") ||
    (board[1][0] === "X" && board[1][1] === "X" && board[1][2] === ".")) {
      firstIndex = 1;
      secondIndex = 2;
    }
    else if ((board[1][0] === "O" && board[1][1] === "." && board[1][2] === "O") ||
    (board[1][0] === "X" && board[1][1] === "." && board[1][2] === "X")) {
      firstIndex = 1;
      secondIndex = 1;
    }
    else if ((board[1][0] === "." && board[1][1] === "O" && board[1][2] === "O") ||
    (board[1][0] === "." && board[1][1] === "X" && board[1][2] === "X")) {
      firstIndex = 1;
      secondIndex = 0;
    }
    else if ((board[2][0] === "O" && board[2][1] === "O" && board[2][2] === ".") ||
    (board[2][0] === "X" && board[2][1] === "X" && board[2][2] === ".")) {
      firstIndex = 2;
      secondIndex = 2;
    }
    else if ((board[2][0] === "O" && board[2][1] === "." && board[2][2] === "O") ||
    (board[2][0] === "X" && board[2][1] === "." && board[2][2] === "X")) {
      firstIndex = 2;
      secondIndex = 1;
    }
    else if ((board[2][0] === "." && board[2][1] === "O" && board[2][2] === "O") ||
    (board[2][0] === "." && board[2][1] === "X" && board[2][2] === "X")) {
      firstIndex = 2;
      secondIndex = 0;
    }
    else if ((board[0][0] === "O" && board[1][1] === "O" && board[2][2] === ".") ||
    (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === ".")) {
      firstIndex = 2;
      secondIndex = 2;
    }
    else if ((board[0][0] === "." && board[1][1] === "O" && board[2][2] === "O") ||
    (board[0][0] === "." && board[1][1] === "X" && board[2][2] === "X")) {
      firstIndex = 0;
      secondIndex = 0;
    }
    else if ((board[0][2] === "O" && board[1][1] === "O" && board[2][0] === ".") ||
    (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === ".")) {
      firstIndex = 2;
      secondIndex = 0;
    }
    else if ((board[0][2] === "." && board[1][1] === "O" && board[2][0] === "O") ||
    (board[0][2] === "." && board[1][1] === "X" && board[2][0] === "X")) {
      firstIndex = 0;
      secondIndex = 2;
    }
    else if ((board[0][2] === "O" && board[1][1] === "." && board[2][0] === "O") ||
    (board[0][2] === "X" && board[1][1] === "." && board[2][0] === "X") ||
    (board[0][0] === "O" && board[1][1] === "." && board[2][2] === "O") ||
    (board[0][0] === "X" && board[1][1] === "." && board[2][2] === "X")) {
      firstIndex = 1;
      secondIndex = 1;
    }
    else if ((board[0][0] === "X" && board[1][0] === "X" && board[2][0] === ".") ||
    (board[0][0] === "O" && board[1][0] === "O" && board[2][0] === ".")) {
      firstIndex = 2;
      secondIndex = 0;
    }
    else if ((board[0][0] === "X" && board[1][0] === "." && board[2][0] === "X") ||
    (board[0][0] === "O" && board[1][0] === "." && board[2][0] === "O")) {
      firstIndex = 1;
      secondIndex = 0;
    }
    else if ((board[0][0] === "." && board[1][0] === "X" && board[2][0] === "X") ||
    (board[0][0] === "." && board[1][0] === "O" && board[2][0] === "O")) {
      firstIndex = 0;
      secondIndex = 0;
    }
    else if ((board[0][1] === "X" && board[1][1] === "X" && board[2][1] === ".") ||
    (board[0][1] === "O" && board[1][1] === "O" && board[2][1] === ".")) {
      firstIndex = 2;
      secondIndex = 1;
    }
    else if ((board[0][1] === "X" && board[1][1] === "." && board[2][1] === "X") ||
    (board[0][1] === "O" && board[1][1] === "." && board[2][1] === "O")) {
      firstIndex = 1;
      secondIndex = 1;
    }
    else if ((board[0][1] === "." && board[1][1] === "X" && board[2][1] === "X") ||
    (board[0][1] === "." && board[1][1] === "O" && board[2][1] === "O")) {
      firstIndex = 0;
      secondIndex = 1;
    }
    else if ((board[0][2] === "X" && board[1][2] === "X" && board[2][2] === ".") ||
    (board[0][2] === "O" && board[1][2] === "O" && board[2][2] === ".")) {
      firstIndex = 2;
      secondIndex = 2;
    }
    else if ((board[0][2] === "X" && board[1][2] === "." && board[2][2] === "X") ||
    (board[0][2] === "O" && board[1][2] === "." && board[2][2] === "O")) {
      firstIndex = 1;
      secondIndex = 2;
    }
    else if ((board[0][2] === "." && board[1][2] === "X" && board[2][2] === "X") ||
    (board[0][2] === "." && board[1][2] === "O" && board[2][2] === "O")) {
      firstIndex = 0;
      secondIndex = 2;
    }
    else if (board[1][1] === ".") {
      firstIndex = 1;
      secondIndex = 1;
    }
    else if ((board[0][0] === "X" && board[2][2] === "X" && (board[0][2] || board[2][0]) === ".") ||
    (board[0][0] === "O" && board[2][2] === "O" && (board[0][2] || board[2][0]) === ".")) {
      if (board[0][1] === ".") {
        firstIndex = 0;
        secondIndex = 1;
      }
      else {
        firstIndex = 2;
        secondIndex = 1;
      }
    }
    else if ((board[0][2] === "X" && board[2][0] === "X" && (board[0][0] || board[2][2]) === ".") ||
    (board[0][2] === "O" && board[2][0] === "O" && (board[0][0] || board[2][2]) === ".")) {
      if (board[0][1] === ".") {
        firstIndex = 0;
        secondIndex = 1;
      }
      else if (board[2][1] === "."){
        firstIndex = 2;
        secondIndex = 1;
      }
    }
    else if (((board[0][1] && board[1][0]) === "X") && ((board[0][0] && board[0][2] && board[2][0]) === ".") ||
    ((board[0][1] && board[1][0]) === "O") && ((board[0][0] && board[0][2] && board[2][0]) === ".")) {
      firstIndex = 0;
      secondIndex = 0;
    }
    else if (((board[0][1] && board[1][2]) === "X") && ((board[0][0] && board[0][2] && board[2][2]) === ".") ||
    ((board[0][1] && board[1][2]) === "O") && ((board[0][0] && board[0][2] && board[2][2]) === ".")) {
      firstIndex = 0;
      secondIndex = 2;
    }
    else if (((board[2][1] && board[1][2]) === "X") && ((board[2][2] && board[0][2] && board[2][0]) === ".") ||
    ((board[2][1] && board[1][2]) === "O") && ((board[2][0] && board[0][2] && board[2][2]) === ".")) {
      firstIndex = 2;
      secondIndex = 2;
    }
    else if (((board[2][1] && board[1][0]) === "X") && ((board[0][0] && board[2][0] && board[2][2]) === ".") ||
    ((board[2][1] && board[1][0]) === "O") && ((board[0][0] && board[2][0] && board[2][2]) === ".")) {
      firstIndex = 2;
      secondIndex = 0;
    }
    else if (board[0][0] === ".") {
      firstIndex = 0;
      secondIndex = 0;
    }
    else if (board[0][2] === ".") {
      firstIndex = 0;
      secondIndex = 2;
    }
    else if (board[2][0] === ".") {
      firstIndex = 2;
      secondIndex = 0;
    }
    else if (board[2][2] === ".") {
      firstIndex = 2;
      secondIndex = 2;
    }
    board[firstIndex][secondIndex] = symbol;
    return true;
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
