//ROCK-PAPER-SCISSOR- GAME

function computer(){
    let choice= ["ROCK","PAPER","SCISSOR",] ;
    let computer_selection = choice[Math.floor(Math.random()*4)];
    return computer_selection;
}

function player(){
    let player_selection = (prompt("Rock-Paper-Scissor?"));
   return player_selection.toUpperCase();
}
function check() {

let score = 0 ;

for (let i =0 ; i < 4 ; i++){
    computer_selection = computer();
    player_selection = player();

    if ( computer_selection === player_selection ) {
    console.log("It's a draw!");
    score+= 0;

    } else if (computer_selection === "ROCK" && player_selection==="PAPER"){
        console.log("You WIN! Paper defeated the rock");
        score +=1;

    }else if (computer_selection === "PAPER" && player_selection==="ROCK"){
        console.log("You LOSE! Paper defeated the Rock.");
        score += -1;

    }else if (computer_selection === "ROCK" && player_selection==="SCISSOR"){
        console.log("You LOSE! Rock defeated the Scissor.");
        score += -1;

    } else if (computer_selection === "SCISSOR" && player_selection==="ROCK"){
        console.log("You WIN! Rock defeated the scissor.");
        score += 1;


    }else if (computer_selection === "SCISSOR" && player_selection==="PAPER"){
        console.log("You LOSE! Scissor defeated the paper.");
        score += -1;

    }else if (computer_selection === "PAPER" && player_selection==="SCISSOR"){
        console.log("You WIN ! Scissor defeated the paper.");
        score += 1 ;
    }
   
}
console.log("You scored " + score + " points.");
switch (score) {
    case 4:
       console.log("Outstanding");
        break;
    case 3:
        console.log("Excellent");
        break;
    case 2:
        console.log("Good");
        break;
    case 1:
        console.log("Poor");
        break;
}
}
check();