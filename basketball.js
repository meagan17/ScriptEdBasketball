function promptForPlayerName(playerone){
   playerone= prompt("Enter name");
   if(playerone.length >15){
       alert ("Wow thats a long name");
   }
   return playerone;
}

function tryTwoPointShot(){
   var number1 = Math.random();
   var number2 = Math.random();
   if(number1 > 0.2 && number2 > 0.2){
    return true;
   }
   else {
      return false;
   }
}

function tryThreePointShot(){
   var number1 = Math.random();
   var number2 = Math.random();
   if(number1 <= 0.2 || number2 >= 0.8){
    return true;
   }
   else {
      return false;
   }
}

function getShotString(name,points,shotmade){
   if (shotmade){
    return name + " attempted a " + points + " pointer. It was good";
   }
   else{
      return name + " attempted a " + points + " pointer. It was no good"; 
   }
}

function updateScore(change,score,amountofpointstheshotwas){
   if (change){
      return score + amountofpointstheshotwas;
      }
      else {
         return score;
      }
}

function isEndOfGame (score,playername){
   if(score >= 20){
      alert ("The game is over " + playername + " won");
        return true;
   }
   else {
    return false;
   }
}