const levels = [
    [],
    [1],
    [1, 4],
    [1, 4, 2],
  ];
  
 let level = 1;
  let score = 0;
  let sequence = [];
  let userClicks = [];
  let isGameStarted = false;
  let isGamePaused = false;
  const maximumLevel = 25;
  
  let highScore = localStorage.getItem('highScore') || 0;
  
  const buttons = document.getElementsByClassName('game-button');
  const startButton = document.getElementById('start-button');
  const restartButton = document.getElementById('restart-button');
  const pauseButton = document.getElementById('pause-button');
  const highScoreElement = document.getElementById('high-score');
  const currentScoreElement = document.getElementById('current-score');
  const resetHighScoreButton = document.getElementById('reset-high-score');
  
  startButton.addEventListener('click', startGame);
  restartButton.addEventListener('click', restartGame);
  pauseButton.addEventListener('click', togglePause);
  resetHighScoreButton.addEventListener('click', resetHighScore);
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
  }
  
  function startGame() {
    if (!isGameStarted) {
      isGameStarted = true;
      startButton.disabled = true;
      generateSequence();
      showSequence();
    }
  }
  
  let interval;
  function restartGame() {
    if (!isGameStarted) {
      const confirmRestart = confirm("Vai Jūs esat pārliecināts, ka vēlaties restartēt spēli?");
      if (confirmRestart) {
        level = 1;
        score = 0;
        sequence = [];
        userClicks = [];
        currentScoreElement.textContent = 'Rezultāts: 0';
        isGameStarted = false;
        startButton.disabled = false;
        clearInterval(interval);
  
        highScore = localStorage.getItem('highScore') || 0;
        highScoreElement.textContent = `Augstākais rezultāts: ${highScore}`;
      }
    }
  }
  
  function togglePause() {
    isGamePaused = !isGamePaused;
    pauseButton.textContent = isGamePaused ? 'Turpināt' : 'Nopauzēt';
  }
  
  function handleButtonClick(event) {
    if (isGameStarted && !isGamePaused) {
      const buttonId = parseInt(event.target.id.replace('button', ''));
      userClicks.push(buttonId);
      checkUserInput();
    }
  }
  
  function generateSequence() {
    sequence = [];
    for (let i = 0; i < level; i++) {
      const buttonId = Math.floor(Math.random() * buttons.length) + 1;
      sequence.push(buttonId);
    }
  }
  
  function getRandomButtonId() {
    const availableButtons = Array.from({ length: 6 }, (_, i) => i + 1);
    for (const buttonId of sequence) {
      const index = availableButtons.indexOf(buttonId);
      if (index !== -1) {
        availableButtons.splice(index, 1);
      }
    }
    const randomIndex = Math.floor(Math.random() * availableButtons.length);
    return availableButtons[randomIndex];
  }
  
  function showSequence() {
    disableButtons();
    let i = 0;
interval = setInterval(() => {
  lightUpButton(sequence[i]);
  i++;
  if (i === sequence.length) {
    clearInterval(interval);
    setTimeout(enableButtons, 1000);
  }
}, 1500);
  }
  
  
  function lightUpButton(buttonId) {
    const button = document.getElementById(`button${buttonId}`);
    button.classList.add('active');
    setTimeout(() => {
      button.classList.remove('active');
    }, 1000);
  }
  
  function disableButtons() {
    for (const button of buttons) {
      button.disabled = true;
    }
  }
  
  function enableButtons() {
    for (const button of buttons) {
      button.disabled = false;
    }
  }
  
  function checkUserInput() {
    const lastIndex = userClicks.length - 1;
    if (userClicks[lastIndex] === sequence[lastIndex]) {
      if (userClicks.length === sequence.length) {
        score++;
        currentScoreElement.textContent = `Rezultāts: ${score}`;
        userClicks = [];
        if (level === maximumLevel) {
          endGame();
        } else {
          level++;
          generateSequence();
          showSequence();
        }
      }
    } else {
      endGame();
    }
  }
  
  
  function endGame() {
    isGameStarted = false;
    startButton.disabled = false;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('highScore', highScore);
    }
    alert(`Spēle beidzās! Jūsu rezultāts: ${score}`);
  }
  
  highScoreElement.textContent = `Augstākais rezultāts: ${highScore}`;

  function resetHighScore() {
    highScore = 0;
    localStorage.setItem('highScore', highScore); 
    highScoreElement.textContent = `Augstākais rezultāts: ${highScore}`;
  }
  