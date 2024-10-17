window.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.card');
    var currentCardIndex = 0;
  
    function showCard(index) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '0';
        cards[i].style.transform = 'translateY(100px)';
      }
      cards[index].style.opacity = '1';
      cards[index].style.transform = 'translateY(0)';
    }
  
    function showNextCard() {
      currentCardIndex++;
      if (currentCardIndex >= cards.length) {
        currentCardIndex = 0;
      }
      showCard(currentCardIndex);
    }
  
    showCard(currentCardIndex);
  
    var nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', showNextCard);
  
    sessionStorage.setItem('currentCardIndex', currentCardIndex.toString());
  });
  
  window.addEventListener('load', function () {
    var savedCardIndex = sessionStorage.getItem('currentCardIndex');
    if (savedCardIndex !== null) {
      currentCardIndex = parseInt(savedCardIndex);
      showCard(currentCardIndex);
    }
  });
zz  