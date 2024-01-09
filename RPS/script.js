let userChoice;
let computerChoice;
let wins = 0;
let losses = 0;
let ties = 0;

const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(user, computer) {
  if (user === computer) {
    ties++;
    return 'It\'s a tie! Too easy! Played you like a violin, then cut your strings. Nighty night, Bats.';
    
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    wins++;
    if (wins === 5) {
      // If wins reach 5, redirect to a new page
      window.location.href = 'EndCredit.html';
    }
    return 'You win! Now, If I was in charge this would have never have happened!';
  } else {
    losses++;
    return 'You lose! This is how it happened. This is how the Batman died!';
  }
}

function makeChoice(choice) {
  userChoice = choice;
  computerChoice = computerPlay();

  const result = playRound(userChoice, computerChoice);
  document.getElementById('result').innerText = result;

  if (result === 'You win! Now, If I was in charge this would have never have happened!') {
    playVideo('Credits/Batman Arkham Knight - All The Joker Game Over Death Scenes (online-video-cutter.com).mp4');
  } else if (result === 'You lose! This is how it happened. This is how the Batman died!') {
    playVideo("Credits/Lose.mp4");
  } else{
      playVideo("Credits/Tie.mp4");
  }
  updateScoreboard();
}

function playVideo(videoSource) {
  const videoContainer = document.getElementById('video-container');
  const video = document.getElementById('video');

  video.src = videoSource;
  videoContainer.style.display = 'block';
  video.play();
}

function updateScoreboard() {
  document.getElementById('wins').innerText = wins;
  document.getElementById('losses').innerText = losses;
  document.getElementById('ties').innerText = ties;
}
