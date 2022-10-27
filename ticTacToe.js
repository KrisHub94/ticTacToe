const {getMenuOption,MenuAscIIArt}= require("./menu"); // use it e.g. like menu.get_menu_option()
const {getEmptyBoard, 
      displayBoard,
      isBoardFull,
      getWinningPlayer,
      } = require("./board");
const coordinate = require("./coordinates");
const prompt = require("prompt-sync")();
const {getPlayerMove} = require("./coordinates");

const HUMAN_VS_HUMAN = 1;
const RANDOM_AI_VS_RANDOM_AI = 2;
const HUMAN_VS_RANDOM_AI = 3;
const HUMAN_VS_UNBEATABLE_AI = 4;
let playerSymbol = "X";


function main() {
    console.log('\x1b[36m%s\x1b[0m',MenuAscIIArt)
  let gameMode = getMenuOption();
  let gameBoard = getEmptyBoard();
  let isGameRunning = true;
  let symbol = "X" || "O";

  while (isGameRunning) {
    displayBoard(gameBoard);
    getPlayerMove(gameBoard);

    if (isBoardFull(gameBoard) === true){
        console.log(displayBoard(gameBoard));
        
        console.log("Thank you for playing \n"+
                     "Do you want to play again \n"+
                     "Enter 'yes' or 'no'.")
        let userInput = prompt (": ")

        while( userInput !== "yes".toLowerCase() && userInput !== "no".toLowerCase()){
            console.log("Please only enter 'yes' or 'no'.")
            return userInput = prompt (": ");
        }
        if (userInput === "yes".toLowerCase()){
          return getMenuOption(gameMode);
        }
        if (userInput === "no".toLowerCase()){
          process.exit()
        }
      }
      if (getWinningPlayer(symbol, gameBoard) === true){
        console.log(displayBoard(gameBoard))
        console.log ("Congratulations "+ symbol+" Wins \n"+
                     "Do you want to play again \n"+
                     "Enter 'yes' or 'no'.");
                     let userInput = prompt (": ")

        while( userInput !== "yes".toLowerCase() && userInput !== "no".toLowerCase()){
            console.log("Please only enter 'yes' or 'no'.")
            return userInput = prompt (": ");
      }
      if (userInput === "yes".toLowerCase()){
        return getMenuOption(gameMode);
      }
      if (userInput === "no".toLowerCase()){
        process.exit()
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
}
main();