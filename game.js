// Define getRandomInt function
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Define getComputerChoice function
function getComputerChoice () {
  let computerChoice = getRandomInt(1, 3)
  if (computerChoice == 1) return 'rock'
  else if (computerChoice == 2) return 'paper'
  else return 'scissors'
}

// Define playRound function
function playRound (playerSelection, computerChoice) {
  switch (playerSelection) {
    case 'rock':
      if (computerChoice === 'paper') {
        return 'lose'
      } else if (computerChoice === 'scissors') {
        return 'win'
      } else {
        return 'draw'
      }
    case 'paper':
      if (computerChoice === 'rock') {
        return 'win'
      } else if (computerChoice === 'scissors') {
        return 'lose'
      } else {
        return 'draw'
      }
    case 'scissors':
      if (computerChoice === 'rock') {
        return 'lose'
      } else if (computerChoice === 'paper') {
        return 'win'
      } else {
        return 'draw'
      }
    default:
      return 'invalid selection' // Handle invalid input
  }
}

//Consoler processing

//get the user content
function choiceProcessing (event) {
  // Access the button directly from the event object
  const button = event.currentTarget
  let Userchoice = button.getAttribute('data-choice')
  let CompChoice = getComputerChoice()
  let res = playRound(Userchoice, CompChoice)
  document.getElementById('ComputerChoice').innerHTML = CompChoice
  document.getElementById('YoureChoice').innerHTML = Userchoice
  document.getElementById('res').innerHTML = res
  let currentscore = document.getElementById('score')
  let score = currentscore.textContent.split(' - ')
  let userScore = parseInt(score[0])
  let compScore = parseInt(score[1])
  if (res == 'win') {
    userScore++
  } else if (res == 'lose') {
    compScore++
  } else {
    userScore++
    compScore++
  }
  let newScore = `${userScore} - ${compScore}`

  let roundElement = document.getElementById('round')
  let round = parseInt(roundElement.textContent) // Get the text content, not innerHTML
  round++
  if (round <= 10) {
    document.getElementById('score').innerHTML = newScore

    roundElement.textContent = round
  } else if (round > 10) {
    if (userScore > compScore) {
      alert('Game Over! You won!')
    } else {
      alert('Game Over! You lose!')
    }
  }
}

const gameButtons = document.querySelectorAll('.game-button')
gameButtons.forEach(button => {
  button.addEventListener('click', choiceProcessing) // Pass the function directly
})


