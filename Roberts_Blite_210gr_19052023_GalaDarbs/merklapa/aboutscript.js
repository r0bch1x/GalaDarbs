// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get all book containers
  var bookContainers = document.getElementsByClassName("book-container");

  // Attach click event listeners to each book container
  for (var i = 0; i < bookContainers.length; i++) {
    var bookContainer = bookContainers[i];
    bookContainer.addEventListener("click", handleBookClick);
  }
});

// Handle book click event
function handleBookClick(event) {
  // Get the book container that was clicked
  var bookContainer = event.currentTarget;

  // Toggle the active class on the book container
  bookContainer.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
  // Get the search input element
  const searchInput = document.getElementById("search-input");

  // Get all the book containers
  const bookContainers = document.querySelectorAll(".book-container");

  // Add event listener for the search button click
  document.getElementById("search-button").addEventListener("click", function() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Loop through each book container
    bookContainers.forEach(function(container) {
      const bookTitle = container.querySelector(".book-title").innerText.toLowerCase();
      const bookAuthor = container.querySelector(".book-author").innerText.toLowerCase();

      // Check if the search term matches the book title or author
      if (bookTitle.includes(searchTerm) || bookAuthor.includes(searchTerm)) {
        container.style.display = "flex"; // Show the book container
      } else {
        container.style.display = "none"; // Hide the book container
      }
    });
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
