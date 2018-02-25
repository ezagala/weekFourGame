var rpg = {
    charOne: {health: 100, counterAttack: 5, attackPower: 8},
    charTwo: {health: 120, counterAttack: 20, attackPower: 6},
    charThree: {health: 150, counterAttack: 25, attackPower: 10},
    charFour: {health: 180, counterAttack: 15, attackPower: 12},
    // player: {health: 0, counterAttack: 0, attackPower: 0},
    // enemy:  initialized when opponent is selected 
    initialize: function(){
        // Append default HP values to characters
        $("#charOneHP").text(' ' + rpg.charOne.health); 
        $("#charTwoHP").text(' ' + rpg.charTwo.health);
        $("#charThreeHP").text(' ' + rpg.charThree.health);
        $("#charFourHP").text(' ' + rpg.charFour.health);
    }, 
    gamePlay: function() {
        
        var assign = function() { 
            // Target children of the selectChar div and set up on click event
            $("#selectChar").children().on("click", function(event){
                if (rpg.player === undefined) {
                    switch (event.target.id) {
                        // If match: 
                        // (1) Move selected character to Protagonist, (2) move others to enemies queue, (3) hide select character div and enemy queue placeholder, (4) player object is initialiezed with the properties of the seleced character
                        case "charOneImg": 
                            $("#charOne").appendTo($("#protag")); 
                            $("#enemyQueue").append($("#charTwo, #charThree, #charFour"))
                            $("#selectRow, #enemyQueueHolder").hide(); 
                            rpg.player = rpg.charOne
                            console.log(rpg.player)
                            break; 
                        case "charTwoImg": 
                        $("#protag").append($("#charTwo")); 
                            $("#enemyQueue").append($("#charOne, #charThree, #charFour"))
                            $("#selectRow, #enemyQueueHolder").hide(); 
                            rpg.player = rpg.charTwo
                            console.log(rpg.player)
                            break; 
                        case "charThreeImg":
                            $("#protag").append($("#charThree")); 
                            $("#enemyQueue").append($("#charOne, #charTwo, #charFour"))
                            $("#selectRow, #enemyQueueHolder").hide();
                            rpg.player = rpg.charThree
                            console.log(rpg.player)
                            break; 
                        case "charFourImg": 
                            $("#protag").append($("#charFour")); 
                            $("#enemyQueue").append($("#charOne, #charTwo, #charThree"))
                            $("#selectRow, #enemyQueueHolder").hide();
                            rpg.player = rpg.charFour
                            console.log(rpg.player)
                            break;
                    }
                } else if (rpg.enemy === undefined) {
                    switch (event.target.id) {
                        case "charOneImg":
                            $("#charOne").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charOne
                            break; 
                        case "charTwoImg":
                            $("#charTwo").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charTwo 
                            console.log(rpg.enemy)
                            break; 
                        case "charThreeImg":
                            $("#charThree").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charThree     
                            break;
                        case "charFourImg": 
                            $("#charFour").appendTo($("#enemy")); 
                            rpg.enemy = rpg.charFour
                            break;
                    }
                }
            })
        }
        assign(); 
    
        $("#attack").on("click", function() {
            rpg.enemy = undefined;
            $("#enemy").children().remove() 
            console.log("enemy: " + rpg.enemy)
            console.log("player: " + rpg.player)
        })
        

    }
}

    $(document).ready(function(){
        rpg.initialize();
        rpg.gamePlay(); 
    })

    




 