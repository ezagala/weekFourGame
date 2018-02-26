var rpg = {
    // Character objects with default properties 
    charOne: {health: 100, cntrAttck: 15, attckPwr: 30, attckPwrDef: 30},
    charTwo: {health: 120, cntrAttck: 20, attckPwr: 20, attckPwrDef: 20},
    charThree: {health: 135, cntrAttck: 25, attckPwr: 15, attckPwrDef: 15},
    charFour: {health: 155, cntrAttck: 15, attckPwr: 15, attckPwrDef: 15},
    // player: undefined,
    // enemy:  undefined,
    initialize: function(){
        // Append default HP values to characters
        $("#charOneHP").text(' ' + rpg.charOne.health); 
        $("#charTwoHP").text(' ' + rpg.charTwo.health);
        $("#charThreeHP").text(' ' + rpg.charThree.health);
        $("#charFourHP").text(' ' + rpg.charFour.health);

        $("#winOrLose").hide()
        $(".btn-danger").hide()
    }, 
    gamePlay: function() {

        var youWin = function() {
            $("#logPlayerHit").remove()
            $("#logEnemyHit").remove()
            $(".btn-primary").remove()
            $("#selectChar").remove()
            $("#enemy").remove()
            $("#vs").remove()
            $("#opHeader").remove()
            $(".btn-danger").show()
            $("#enemyQueue").remove()
            $("#winOrLose").show().append("<h3>You win!</h3>")
        }
        
        var youLose = function () {
            $("#logPlayerHit").remove()
            $("#logEnemyHit").remove()
            $(".btn-primary").remove()
            $("#selectChar").remove()
            $("#vs").remove()
            $("#enemy").remove()
            $("#opHeader").remove()
            $(".btn-danger").show()
            $("#winOrLose").show().append("<h3>You lose, sucka!</h3>")
        }

        var reset = function () {
            location.reload(); 
        }

        $(".btn-danger").on("click", function() {
            reset(); 
        } )

        
        var assign = function() { 
            // Target children of the selectChar div and set up on click event
            $("#selectChar").children().on("click", function(event){
                if (rpg.player === undefined) {
                    switch (event.target.id) {
                        // If match...
                        case "charOneImg": 
                            // Move selected character to Protagonist
                            $("#protag").append($("#charOne"));
                            // Move others to enemies queue
                            $("#enemyQueue").append($("#charTwo, #charThree, #charFour"))
                            // Hide select character div and enemy queue placeholder
                            $("#selectChar, #enemyQueueHolder").css("display", "none")
                            // Character html IDs are updated with protagonist IDs
                            $("#charOneHP").attr("id", "protagHP")
                            $("#charOneImg").attr("id", "protagImg")
                            // Player object is assigned the properties of the seleced character
                            rpg.player = Object.assign({}, rpg.charOne)
                            // Selected characters health is set to 0 so it passes condition that holds the youWin function 
                            rpg.charOne.health = 0
                            console.log(rpg.player)
                            break; 
                            
                        case "charTwoImg": 
                            $("#protag").append($("#charTwo")); 
                            $("#enemyQueue").append($("#charOne, #charThree, #charFour"))
                            $("#selectRow, #enemyQueueHolder").hide(); 
                            $("#charTwoHP").attr("id", "protagHP")
                            $("#charTwoImg").attr("id", "protagImg")
                            rpg.player = Object.assign({}, rpg.charTwo)
                            rpg.charTwo.health = 0
                            console.log(rpg.player)
                            break; 

                        case "charThreeImg":
                            $("#protag").append($("#charThree")); 
                            $("#enemyQueue").append($("#charOne, #charTwo, #charFour"))
                            $("#selectRow, #enemyQueueHolder").hide();
                            $("#charThreeHP").attr("id", "protagHP")
                            $("#charThreeImg").attr("id", "protagImg")
                            rpg.player = Object.assign({}, rpg.charThree)
                            rpg.charThree.health = 0
                            console.log(rpg.player)
                            break; 

                        case "charFourImg": 
                            $("#protag").append($("#charFour")); 
                            $("#enemyQueue").append($("#charOne, #charTwo, #charThree"))
                            $("#selectRow, #enemyQueueHolder").hide();
                            $("#charFourHP").attr("id", "protagHP")
                            $("#charFourImg").attr("id", "protagImg")
                            rpg.player = Object.assign({}, rpg.charFour)
                            rpg.charFour.health = 0
                            console.log(rpg.player)
                            break;

                    }

                } else if (rpg.enemy === undefined) {
                    // If an enemy has not already been selected... 
                    console.log(event.target)
                    switch (event.target.id) {
                        
                        case "charOneImg":
                            //Move the character to the enemy div
                            $("#charOne").appendTo($("#enemy")); 
                            //Swap the character's html ID for the enemy's ID 
                            $("#charOneHP").attr("id", "enemyHP")
                            //Initialize the enemy object w/ the character's properties
                            rpg.enemy = rpg.charOne
                            console.log(rpg.enemy)
                            break; 

                        case "charTwoImg":
                            $("#charTwo").appendTo($("#enemy")); 
                            $("#charTwoHP").attr("id", "enemyHP")
                            rpg.enemy = rpg.charTwo 
                            console.log(rpg.enemy)
                            break; 

                        case "charThreeImg":
                            $("#charThree").appendTo($("#enemy")); 
                            $("#charThreeHP").attr("id", "enemyHP")
                            rpg.enemy = rpg.charThree   
                            console.log(rpg.enemy)  
                            break;

                        case "charFourImg": 
                            $("#charFour").appendTo($("#enemy")); 
                            $("#charFourHP").attr("id", "enemyHP")
                            rpg.enemy = rpg.charFour
                            console.log(rpg.enemy)
                            break;
                    }
                }
            })
        }
        assign(); 
    
        // Attack button functionality: 
        $("#attack").on("click", function() {
            // If there is an enemy selected... 
            if (!$("#enemy").is(":empty")) {
                //Decrease enemy health by current player attack strength, render to character HP and game details
                rpg.enemy.health -= rpg.player.attckPwr
                $("#enemyHP").text(' ' + rpg.enemy.health)
                $("#logPlayerHit").text("Your attack damaged the opponent by " + rpg.player.attckPwr + ' vitality points!')
                //Increment the player's attackPower by its base value
                rpg.player.attckPwr += rpg.player.attckPwrDef
                //Decrease player health by enemy counter attack, render to character HP and game details
                rpg.player.health -= rpg.enemy.cntrAttck
                $("#protagHP").text(' ' + rpg.player.health )
                $("#logEnemyHit").text("The enemy's counterattack damaged you by " + rpg.enemy.cntrAttck + " vitality points!")
                
                if (rpg.player.health > 0 && rpg.charOne.health < 1 && rpg.charTwo.health < 1 && rpg.charThree.health < 1 && rpg.charFour.health < 1 && rpg.enemy.health < 1) {
                    youWin()
                } else if (rpg.player.health < 1 && rpg.enemy.health < 1) {  
                    youLose()
                } else if (rpg.enemy.health < 1) {
                    rpg.enemy = undefined;
                    $("#enemy").children().remove()
                } else if (rpg.player.health < 1) {
                    youLose()
                }s
            }
        })
    }
}

$(document).ready(function(){
    rpg.initialize();
    rpg.gamePlay(); 
})

    




 