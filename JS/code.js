function startFunction() {
    let startButton = document.getElementById('start-button')
    startButton.addEventListener('click', startGame)
}

function startGame() {

    function randomChoise(min, max) {
        return Math.floor(Math.random() * (max - min +1) + min)
    }
    
    function choise(move) {
        let result = ""
        if(move == 1) {
            result = "Rock 🪨"
        } else if (move == 2) {
            result = "Paper  📃"
        } else if (move == 3) {
            result = "Tijera ✂️"
        } else {
            result = "Wrong choise"
        }
        return result
    }
    
    // 1 is Rock, 2 is Paper, 3 is Scissors
    
    let player = 0
    let pc = 0
    let wins = 0
    let losses = 0
    
    while (wins < 3 && losses < 3) {
        pc = randomChoise(1,3)
        player = prompt("Choose: 1 for Rock, 2 for Paper, 3 for Scissors")
    
        alert("You chose " + choise(player))
        alert("PC chose " + choise(pc))
    
        // Fight
    
        if (pc == player) {
            alert("Tie")
        } else if (player == 1 && pc == 3) {
            alert("You win")
            wins = wins + 1
        } else if (player == 2 && pc ==1) {
            alert("You win")
            wins = wins + 1
        } else if (player == 3 && pc ==2) {
            alert("You win")
            wins = wins + 1
        } else {
            alert("You lose")
            losses = losses +1
        }
    }
    
    alert("You won " + wins + " times. You lost " + losses + "times.")

}


// let startButton = document.getElementById('start-button')
// startButton.addEventListener('click', startGame)

window.addEventListener('load', startFunction)