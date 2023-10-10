/// Defining variables

scoreMaster = document.getElementById("score")
buttonUpgrade = document.getElementById("btn");
buttonUpgradePassive = document.getElementById("btn-passive");
cookieImg = document.getElementById("cookie")

let userScore = 0;
let multiplierUpgrade = 1;
let multiplierCost = 10;
let passiveUpgrade = 0;
let passiveUpgradeCost = 20;


/// Upgrade functions
const upgradeCookie = () =>{
    if (userScore >= multiplierCost){
        userScore -= multiplierCost;
        multiplierUpgrade += 1;
        multiplierCost *= 1.2;
        updateScoreDisplay();
    }
    else {
        alert("You dont have enough currency, currency needed = " + multiplierCost.toFixed(1))}

}

const upgradePassiveIncome = () =>{
    if (userScore >= passiveUpgradeCost){
        userScore -= passiveUpgradeCost;
        passiveUpgrade += 1;
        passiveUpgradeCost *= 1.2;
        updateScoreDisplay();
    }
    else {
        alert("You dont have enough currency, currency needed = " + passiveUpgradeCost.toFixed(1))}

}

const passiveIncome = () => {
    userScore += passiveUpgrade;
    updateScoreDisplay();
}
const startPassiveIncome = () =>{
    passiveIncomeInterval = setInterval(passiveIncome, 1000)
}

/// User interaction
const userClick = () =>{
        userScore += 1 * multiplierUpgrade;
    cookieImg.classList.add("animate-cookie");
    setTimeout(()=> {
        cookieImg.classList.remove("animate-cookie");},100)
    updateScoreDisplay();
}

/// Events

buttonUpgrade.addEventListener("click", upgradeCookie);
buttonUpgradePassive.addEventListener("click", upgradePassiveIncome);
cookieImg.addEventListener("click", userClick);

/// display score
updateScoreDisplay = () =>{
scoreMaster.innerText = "Score: " + userScore.toFixed(1);
}



/// init

updateScoreDisplay();

startPassiveIncome();

