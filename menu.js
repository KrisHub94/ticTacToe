const prompt = require("prompt-sync")();
const MenuAscIIArt = [
    `                                                                                     
    ████████╗██╗ ██████╗    ████████╗ █████╗  ██████╗    ████████╗ ██████╗ ███████╗
    ╚══██╔══╝██║██╔════╝    ╚══██╔══╝██╔══██╗██╔════╝    ╚══██╔══╝██╔═══██╗██╔════╝
       ██║   ██║██║            ██║   ███████║██║            ██║   ██║   ██║█████╗  
       ██║   ██║██║            ██║   ██╔══██║██║            ██║   ██║   ██║██╔══╝  
       ██║   ██║╚██████╗       ██║   ██║  ██║╚██████╗       ██║   ╚██████╔╝███████╗
    `]
module.exports = {
    MenuAscIIArt: MenuAscIIArt,
   
    getMenuOption: function() {
        console.log("Please choose 1-4 \n"+ 
        "1. Human vs Human \n"+
        "2. Random AI vs Random AI \n"+
        "3. Human vs Random AI \n"+
        "4. Human vs Unbeatable AI");
        let userInput = prompt (": ");
        console.clear();

        while (userInput !== "1" && 
               userInput !== "2" && 
               userInput !== "3" && 
               userInput !== "4" ){
            userInput = prompt ("Please only Enter a number between 1-4: ");
        }                           
        if (userInput === "1"){
            console.log("Human vs Human");
            return 1;
            
            
        }
        if (userInput === "2"){
            console.log("Random AI vs Random AI");
            return 2;
        }
        if (userInput === "3"){
            console.log("Human vs Random AI");
            return 3;
        }
        if (userInput === "4"){
            console.log("Human vs Unbeatable AI")
            return 4;
        }
    },
    showExitPrompt: function() {
        console.log( "Do you want to play again ?"+
        "Enter 'yes' or 'no'.");
        let userInput = prompt (": ");

        while( userInput !== "yes".toLowerCase() && userInput !== "no".toLowerCase()){
            console.log("Please only enter 'yes' or 'no'.")
            return userInput = prompt (": ");
        }
        if (userInput === "yes".toLowerCase()){
            return true;
        }
        if (userInput === "no".toLowerCase()){
            process.exit()
        }
    }
 }

// run this function to test whether you have correctly implemented the other function
function checkOptions()
{
    let option = getMenuOption();
    console.log("If the user selected 1, it should print 1");
    console.log(option);
}
