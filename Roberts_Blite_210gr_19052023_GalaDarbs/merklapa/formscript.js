document.addEventListener("DOMContentLoaded", function() {
  const reviewForm = document.getElementById("review-form");
  const reviewTableBody = document.getElementById("review-table-body");
  const clearAllButton = document.getElementById("clear-all-button");

  // Function to create a new row in the review table
  function createReviewRow(firstName, lastName, bookTitle, review) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td contenteditable>${firstName}</td>
      <td contenteditable>${lastName}</td>
      <td contenteditable>${bookTitle}</td>
      <td contenteditable>${review}</td>
      <td class="action-buttons">
        <button class="delete-button">Dzēst</button>
      </td>
    `;
    reviewTableBody.appendChild(row);
  }

  // Function to clear the review form
  function clearForm() {
    reviewForm.reset();
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const bookSelect = document.getElementById("book-select");
    const bookTitle = bookSelect.options[bookSelect.selectedIndex].text;
    const review = document.getElementById("review").value;

    createReviewRow(firstName, lastName, bookTitle, review);
    clearForm();
  }

  // Function to handle review deletion
  function handleDelete(event) {
    const row = event.target.closest("tr");
    const confirmation = confirm("Vai Jūs esat pārliecināts, ka vēlaties dzēst šo ierakstu?");
    if (confirmation) {
      row.remove();
      alert("Ieraksts veiksmīgi dzēsts!");
    }
  }

  // Function to handle review editing
  function handleEdit(event) {
    const row = event.target.closest("tr");
    const deleteButton = row.querySelector(".delete-button");
      row.querySelectorAll("td[contenteditable]").forEach(td => td.setAttribute("contenteditable", "true"));
  }

  // Function to handle clear all reviews
  function handleClearAll() {
    const confirmation = confirm("Vai Jūs esat pārliecināts, ka vēlaties nodzēst visus datus?");
    if (confirmation) {
      while (reviewTableBody.firstChild) {
        reviewTableBody.removeChild(reviewTableBody.firstChild);
      }
      alert("Visi dati ir notīrīti!");
    }
  }

  // Event listeners
  reviewForm.addEventListener("submit", handleSubmit);
  reviewTableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-button")) {
      handleEdit(event);
    } else if (event.target.classList.contains("delete-button")) {
      handleDelete(event);
    }
  });
  clearAllButton.addEventListener("click", handleClearAll);
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
