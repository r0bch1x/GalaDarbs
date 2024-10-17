let cards = [
  {
    title: "Ģimene",
    image: "family.jpg",
    description: "Šī ir mana ģimene <3"
  },
  {
    title: "Darbs",
    image: "bank.jpg",
    description: "Rets attēls ar mani strādājot!"
  },
  {
    title: "Mans mājdzīvnieks Karloss",
    image: "pet.jpg",
    description: "Vai viņš nav smukulis?"
  }
];

const container = document.querySelector(".container");
const addCardButton = document.querySelector(".add-card-button");
const alertButton = document.querySelector(".alert-button");
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

function renderCards(filteredCards = cards) {
  container.innerHTML = "";

  filteredCards.forEach((card, index) => {
    const cardHTML = `
      <div class="card">
        <img src="${card.image}" alt="${card.title}" class="card-image">
        <h2 class="card-title" contenteditable>${card.title}</h2>
        <p class="card-description" contenteditable>${card.description}</p>
        <div class="card-buttons">
          <button class="delete-button" onclick="deleteCard(${index})">Dzēst</button>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function addCard() {
  const newCard = {
    image: "",
    title: "",
    description: ""
  };

  const title = prompt("Ievadi kārts nosaukumu:");
  if (title) {
    newCard.title = title;
  }

  const description = prompt("Ievadi kārts aprakstu:");
  if (description) {
    newCard.description = description;
  }

  const image = prompt("Ievadi attēla URL:");
  if (image) {
    newCard.image = image;
  }

  cards.push(newCard);
  renderCards();
}

function deleteCard(index) {
  cards.splice(index, 1);
  renderCards();
}

renderCards();

alertButton.addEventListener("click", function() {
  alert("1.Kārts rediģēšana: Tagad uzspiežot uz kārts nosaukuma vai apraksta, to var nomainīt. \n\n 2.Kārts dzēšana: Tagad arī ir iespējams dzēst kārti, kas ir tikko pievienota! \n\n 3.Kārts meklēšana: Tagad ir iespējams arī meklēt kārtis, pēc to nosaukuma vai apraksta!");
});


searchButton.addEventListener("click", function() {
  const searchText = searchInput.value;
  filterCards(searchText);
});

function filterCards(searchText) {
  const filteredCards = cards.filter(card => {
    return card.title.toLowerCase().includes(searchText.toLowerCase()) ||
           card.description.toLowerCase().includes(searchText.toLowerCase());
  });
  renderCards(filteredCards);
}
