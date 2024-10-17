window.addEventListener('DOMContentLoaded', function () {
    var progressBar = document.getElementById('progress-bar');
    var progressText = document.getElementById('progress-text');
    var previousButton = document.getElementById('previous-button');
    var nextButton = document.getElementById('next-button');
    var cards = document.querySelectorAll('.card');
    var currentCardIndex = 0;
  
    function updateProgressBar() {
      var progress = currentCardIndex * 10;
      progressBar.style.width = progress + '%';
      progressText.textContent = progress + '%';
  
      if (progress === 0) {
        previousButton.style.display = 'none';
      } else {
        previousButton.style.display = 'block';
      }
  
      if (progress === 100) {
        nextButton.style.display = 'none';
      } else {
        nextButton.style.display = 'block';
      }
    }

    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');

    function searchMonth() {
    var searchTerm = searchInput.value.trim().toLowerCase();

    for (var i = 0; i < cards.length; i++) {
      var month = cards[i].getAttribute('id');

      if (getLatvianMonth(month).toLowerCase() === searchTerm) {
        currentCardIndex = i;
        showCard(currentCardIndex);
        updateProgressBar();
        break;
      }
    }
  }

  function getLatvianMonth(month) {
    switch (month) {
      case 'start':
        return 'sākums';
      case 'september':
        return 'septembris';
      case 'october':
        return 'oktobris';
      case 'november':
        return 'novembris';
      case 'december':
        return 'decembris';
      case 'january':
        return 'janvāris';
      case 'february':
        return 'februāris';
      case 'march':
        return 'marts';
      case 'april':
        return 'aprīlis';
      case 'may':
        return 'maijs';
      case 'june':
        return 'jūnijs';
      default:
        return '';
    }
  }

  searchButton.addEventListener('click', searchMonth);
  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      searchMonth();
    }
  });
  
    function showCard(index) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '0';
        cards[i].style.transform = 'translateY(20px)';
      }
      cards[index].style.opacity = '1';
      cards[index].style.transform = 'translateY(0)';
    }
  
    function showPreviousCard() {
      currentCardIndex--;
      if (currentCardIndex < 0) {
        currentCardIndex = 0;
      }
      showCard(currentCardIndex);
      updateProgressBar();
    }
  
    function showNextCard() {
      currentCardIndex++;
      if (currentCardIndex >= cards.length) {
        currentCardIndex = cards.length - 1;
      }
      showCard(currentCardIndex);
      updateProgressBar();
    }
  
    previousButton.addEventListener('click', showPreviousCard);
    nextButton.addEventListener('click', showNextCard);
  
    showCard(currentCardIndex);
    updateProgressBar();
  });
  
  sessionStorage.setItem('currentCardIndex', currentCardIndex.toString());
  