const {getMenuOption,MenuAscIIArt, showExitPrompt}= require("./menu"); // use it e.g. like menu.get_menu_option()
const {getEmptyBoard, 
      displayBoard,
      isBoardFull,
      getWinningPlayer,
      } = require("./board");
const coordinate = require("./coordinates");
const prompt = require("prompt-sync")();
const {getPlayerMove, changePlayer} = require("./coordinates");

const HUMAN_VS_HUMAN = 1;
const RANDOM_AI_VS_RANDOM_AI = 2;
const HUMAN_VS_RANDOM_AI = 3;
const HUMAN_VS_UNBEATABLE_AI = 4;


function main() {
    console.log('\x1b[36m%s\x1b[0m',MenuAscIIArt)
  let playerSymbol = "X";
  let gameMode = getMenuOption();
  let gameBoard = getEmptyBoard();
  let isGameRunning = true;
  
  while (isGameRunning) {
    displayBoard(gameBoard);
console.log(`Current player: ${playerSymbol}`);
let hasMadeMove = getPlayerMove(gameBoard, playerSymbol);
if (getWinningPlayer(playerSymbol, gameBoard) === true){
      displayBoard(gameBoard);
      console.log (`Player ${playerSymbol} wins`);
      let restart = showExitPrompt();
      if (restart) {
        return main();
      }
}
if (isBoardFull(gameBoard) === true){
      displayBoard(gameBoard);
        
      console.log("Thank you for playing");
      let restart = showExitPrompt();
      if (restart) {
        return main();
      }
      }
if (hasMadeMove) {
  playerSymbol = changePlayer(playerSymbol);
}

    /* TODO
        in each new iteration of the while loop the program should 
        alternate the value of `currentPlayer` from `X` to `O`
        */
    //let currentPlayer = "X";

    /* TODO
        based on the value of the variables `game_mode` and `currentPlayer` 
        the programm should should choose betwen the functions
        get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */
    //let humanCoord = coordinate.getPlayerMove(board, currentPlayer);

    //gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;

    /* TODO 
        based on the values of `winning_player` and `its_a_tie` the program
        should either stop displaying a winning/tie message 
        OR continue the while loop
        */
    //let winningPlayer = board.getWinningPlayer(gameBoard);
    //let itsATie = board.isBoardFull(gameBoard);
  }
}

main();