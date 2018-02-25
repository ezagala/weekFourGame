var rpg = {
    charOne: {health: 100, counterAttack: 5, attackPower: 8},
    charTwo: {health: 120, counterAttack: 20, attackPower: 6},
    charThree: {health: 150, counterAttack: 25, attackPower: 10},
    charFour: {health: 180, counterAttack: 15, attackPower: 12},
    player: {health: 0, counterAttack: 0, attackPower: 0},
    // enemy:  initialized when opponent is selected 
    initialize: function(){
        // Append default HP values to characters
        $("#charOneHP").text(' ' + rpg.charOne.health); 
        $("#charTwoHP").text(' ' + rpg.charTwo.health);
        $("#charThreeHP").text(' ' + rpg.charThree.health);
        $("#charFourHP").text(' ' + rpg.charFour.health);
    }, 

    gamePlay: function() {
        
        var assignProtag = function() { 
            var charObj = rpg.player;
            // Target children of the selectChar div and set up on click event
                $(".selectChar").children().on("click", function(event){
                    if ($("#protag").is(":empty")) {
                    // If match: 
                    // (1) Move selected character to Protagonist, (2) move others to enemies queue, (3) hide select character div and enemy queue placeholder, (4) player object is initialiezed with the properties of the seleced character
                        switch (event.target.id) {
                            case "charOneImg": 
                                $("#charOne").appendTo($("#protag")); 
                                $("#enemyQueue").append($("#charTwo, #charThree, #charFour"))
                                $("#selectRow, #enemyQueueHolder").hide(); 
                                charObj = rpg.charOne
                                console.log(rpg.player)
                                break; 
                            case "charTwoImg": 
                            $("#protag").append($("#charTwo")); 
                                $("#enemyQueue").append($("#charOne, #charThree, #charFour"))
                                $("#selectRow, #enemyQueueHolder").hide(); 
                                charObj = rpg.charOne
                                console.log(rpg.player)
                                break; 
                            case "charThreeImg":
                                $("#protag").append($("#charThree")); 
                                $("#enemyQueue").append($("#charOne, #charTwo, #charFour"))
                                $("#selectRow, #enemyQueueHolder").hide();
                                charObj = rpg.charOne
                                console.log(rpg.player)
                                break; 
                            case "charFourImg": 
                                $("#protag").append($("#charFour")); 
                                $("#enemyQueue").append($("#charOne, #charTwo, #charThree"))
                                $("#selectRow, #enemyQueueHolder").hide();
                                charObj = rpg.charOne
                                console.log(rpg.player)
                                break;
                        }
                    return charObj;
                }
                
            })
            
        }

        assignProtag(); 

    }
}

    $(document).ready(function(){
        rpg.initialize();
        rpg.gamePlay(); 
    })

    //Each character corresponds to an object w/ HP, counterattack, and attack properties. 
        //These properties correspond to divs that render to the page

    // When a character is clicked, update the player property with the clicked characters properties 
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




 