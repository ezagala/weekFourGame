// Collection of scraps that I may (but likely won't) find useful 

var assignProtag = function() {
            if ($("#protag").is(":empty")) {

                var charObj; 

                $("#charOne").on("click", function(){
                    $("#protag").append($("#charOne")); 
                    $("#enemyQueue").append($("#charTwo, #charThree, #charFour"))
                    $("#selectRow, #enemyQueueHolder").hide(); 
                    charObj = rpg.charOne
                    console.log(charObj)
                })

                $("#charTwo").on("click", function(){
                    $("#protag").append($("#charTwo")); 
                    $("#enemyQueue").append($("#charOne, #charThree, #charFour"))
                    $("#selectRow, #enemyQueueHolder").hide(); 
                    charObj = rpg.charTwo
                    console.log(charObj)
                })

                $("#charThree").on("click", function(){
                    $("#protag").append($("#charThree")); 
                    $("#enemyQueue").append($("#charOne, #charTwo, #charFour"))
                    $("#selectRow, #enemyQueueHolder").hide(); 
                    charObj = rpg.charThree
                    console.log(charObj)
                })

                $("#charFour").on("click", function(){
                    $("#protag").append($("#charFour")); 
                    $("#enemyQueue").append($("#charOne, #charTwo, #charThree"))
                    $("#selectRow, #enemyQueueHolder").hide(); 
                    charObj = rpg.charFour
                    console.log(charObj)
                })

                return rpg.player = Object.assign({}, charObj)

            } else {
                 console.log("I'm here!")
            }
        }

        $("#protag").is(":empty")

        
        var assignEnemy = function() {
            $("#selectChar").children().on("click", function(event){
            console.log(event.target)                            
                if (rpg.enemy === undefined) {
                    switch (event.target.id) {
                        case "charOneImg":
                            $("#charOne").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charOne
                            break; 
                        case "charTwoImg":
                            $("#charTwo").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charTwo 
                            break; 
                        case "charThreeImg":
                            $("#charThree").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charThree     
                            break;
                        case "charFourImg": 
                            $("#charOne").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charFour
                            break; 
                    }
                }
            })
        }
        assignEnemy(); 

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