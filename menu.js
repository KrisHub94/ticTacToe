const prompt = require("prompt-sync")();
module.exports = {
    getMenuOption: function() {
        console.log("Please choose 1-4 \n"+ 
        "1. Human vs Human \n"+
        "2. Random AI vs Random AI \n"+
        "3. Human vs Random AI \n"+
        "4. Human vs Unbeatable AI")
        let userInput = prompt (": ");

        console.clear();
        while (userInput !== "1" && 
               userInput !== "2" && 
               userInput !== "3" && 
               userInput !== "4" ){
            userInput = prompt ("Please only Enter a number between 1-4")
            return ;
        }                           
        if (userInput === "1"){
            console.log("Human vs Human");
            
            
        }
        if (userInput === "2"){
            console.log("Random AI vs Random AI")
            
        }
        if (userInput === "3"){
            console.log("Human vs Random AI")
            
        }
        if (userInput === "4"){
            console.log("Human vs Unbeatable AI")
            
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
