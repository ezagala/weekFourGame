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