var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // Log a resulting message to the console so we know it worked.
        console.log(
            playerName + " chose to " + promptFight + "."
        );

        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
        
            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
    
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove player's healthy by subtracting the amount set in the enemyAttack variable
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
    
            // Log a resulting message to the console so we know that it worked.
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

            // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight.  Goodbye!");

                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;

                // Log a resulting message to the console so we know that it worked.
                console.log(
                    playerName + " now has " + playerMoney + " money left."
                )
            }

            // if no (false), ask question again by running fight() again
            else {
                fight();
            }
        }
    }
}

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}