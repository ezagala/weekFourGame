var charOneHP = 100;
var charTwoHP = 120; 
var charThreeHP = 150;
var charFourHP = 180;
var playerHP; 
var enemyHP; 
var player; 
var enemy; 
var enemyQueue; 

$(document).ready(function(){

    var initialize = function(){
        // Append default HP values to characters
        $("#charOneHP").append(' ' + charOneHP); 
        $("#charTwoHP").append(' ' + charTwoHP);
        $("#charThreeHP").append(' ' + charThreeHP);
        $("#charFourHP").append(' ' + charFourHP);
    }
    initialize();

   $("#charOne").on("click", function(){
       //Move selected character to Protagonist, move others to enemies queue 
       $("#protag").append($("#charOne")); 
       $("#enemyQueue").append($("#charTwo, #charThree, #charFour"))
       $("#selectRow, #enemyQueueHolder").hide(); 
   })

   $("#charTwo").on("click", function(){
        //Move selected character to Protagonist, move others to enemies queue 
        $("#protag").append($("#charTwo")); 
        $("#enemyQueue").append($("#charOne, #charThree, #charFour"))
        $("#selectRow, #enemyQueueHolder").hide(); 
    })

    $("#charThree").on("click", function(){
        //Move selected character to Protagonist, move others to enemies queue 
        $("#protag").append($("#charThree")); 
        $("#enemyQueue").append($("#charOne, #charTwo, #charFour"))
        $("#selectRow, #enemyQueueHolder").hide(); 
    })

    $("#charFour").on("click", function(){
        //Move selected character to Protagonist, move others to enemies queue 
        $("#protag").append($("#charFour")); 
        $("#enemyQueue").append($("#charOne, #charTwo, #charThree"))
        $("#selectRow, #enemyQueueHolder").hide(); 
    })

    // if (Protagonist is occupied) {
    //     append the clicked character to enemy 
    // }


})
    // When a character is clicked, that character is assigned to the player
        //Assinged character is appended to the protagonist div

    // Enemies are put in the enemy queue

    // Enemy is assigned to the enemy div when it is clicked in the enemy queue 

    // When attacked button is clicked: 
        // Enemy HP is decreased by the players default damage value
        
        //Enemy HP value is updated on the page 

        //Gameplay notes how much damage was done 

        //Gameplay notes value of enemy counter attack

        //Player HP is updated and rendered 

        // Player damage value is incremented by the amount of this default
        
    //The player loses if their HP are zero or less
        //Option to reset gameplay is made available 
    
    //Prompt player to choose another enemy if enemy HP is zero or less 

    //Append new enemy to enemy div when it's selected 

    //Play wins if enemy queue is empty and enemy HP is zero or less
        //Player is prompted to play again




 