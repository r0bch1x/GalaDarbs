document.addEventListener("DOMContentLoaded", function() {
  // Sample book data
  const books = [
    { title: "Harijs Poters un Filozofu akmens", author: "Džoanna K. Roulinga", genre: "Fantāzijas literatūra", image: "book1.jpg" },
    { title: "Gaiļa ābece", author: "Gita Andersone", genre: "Mācības", image: "book2.jpg" },
    { title: "Grega dienasgrāmata", author: "Džefs Kinnijs", genre: "Romāns", image: "book3.jpg" },
    { title: "Kaķīša dzirnavas", author: "Kārlis Skalbe", genre: "Daiļliteratūra", image: "book4.jpg" },
    { title: "Aušvicas tetovētājs", author: "Hetere Morisa", genre: "Romāns", image: "book5.jpg" }
  ];

  const bookTableBody = document.getElementById("book-table-body");
  const genreFilter = document.getElementById("genre-filter");

  // Function to populate the book table
  function populateBookTable(books) {
    bookTableBody.innerHTML = "";
    books.forEach(function(book, index) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><img src="${book.image}" width="200" height="200"></td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
      `;
      bookTableBody.appendChild(row);
    });
  }

  // Initial population of the book table
  populateBookTable(books);

  // Filter books by genre
  genreFilter.addEventListener("change", function() {
    const selectedGenre = genreFilter.value;
    let filteredBooks = books;
    if (selectedGenre !== "all") {
      filteredBooks = books.filter(function(book) {
        return book.genre === selectedGenre;
      });
    }
    populateBookTable(filteredBooks);
  });
});

// Scroll to top button
window.onscroll = function() {
  showScrollToTopButton();
};

function showScrollToTopButton() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
