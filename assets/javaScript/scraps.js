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


        $("#attack").on("click", function() {
            rpg.enemy = undefined;
            $("#enemy").children().remove() 
            console.log("enemy: " + rpg.enemy)
            console.log("player: " + rpg.player)
        })        

        .append("#charOne, #charTwo, #charThree, #charFour")

// First go at a restart button 

        var reset = function() {
            rpg.initialize(); 

            delete rpg.player 
            delete rpg.enemy 

            rpg.charOne = {health: 100, cntrAttck: 5, attckPwr: 8, attckPwrDef: 8}
            rpg.charTwo = {health: 120, cntrAttck: 20, attckPwr: 6, attckPwrDef: 6}
            rpg.charThree = {health: 150, cntrAttck: 25, attckPwr: 10, attckPwrDef: 10}
            rpg.charFour = {health: 180, cntrAttck: 15, attckPwr: 12, attckPwrDef: 12}

            $("#charOneHP").attr("id", "charOneHP")
            $("#charOneImg").attr("id", "charOneImg")

            $("#charTwoHP").attr("id", "charTwoHP")
            $("#charTwoImg").attr("id", "charTwoImg")

            $("#charThreeHP").attr("id", "charThreeHP")
            $("#charThreeImg").attr("id", "charThreeImg")

            $("#charFourHP").attr("id", "charFourHP")
            $("#charFourImg").attr("id", "charFourImg")

            $("#selectChar").css("display", "block").append($("#charOne, #charTwo, #charThree, #charFour"))

            $("#selectRow").css("display", "block")

            $("#logPlayerHit").text("The player's attack will be appended here.")

            $("#logEnemyHit").text("The enemy's counterattack will be appended here.")

            $("#enemyQueueHolder").parent().append("<h3 id='enemyQueueHolder'>Your oppenents will be listed here.</h3>")
        }

        $(".btn-danger").on("click", function() {
            console.log("I'm here")
            reset(); 
        } )

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