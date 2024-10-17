document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const projectCards = document.getElementsByClassName("project-card");
    const categoryButtons = document.getElementsByClassName("category-button");
  
    searchInput.addEventListener("input", function () {
      const searchValue = searchInput.value.toLowerCase();
  
      Array.from(projectCards).forEach(function (card) {
        const projectName = card.querySelector("h2").textContent.toLowerCase();
        const projectDescription = card.querySelector("p").textContent.toLowerCase();
  
        if (
          projectName.includes(searchValue) ||
          projectDescription.includes(searchValue)
        ) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  
    Array.from(categoryButtons).forEach(function (button) {
      button.addEventListener("click", function () {
        const selectedCategory = button.getAttribute("data-category");
  
        Array.from(projectCards).forEach(function (card) {
          const cardCategory = card.getAttribute("data-category");
  
          if (selectedCategory === "all" || cardCategory === selectedCategory) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
  
        Array.from(categoryButtons).forEach(function (btn) {
          btn.classList.remove("active");
        });
  
        button.classList.add("active");
      });
    });
    const scrollToTopButton = document.getElementById("scroll-to-top-button");
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 0) {
        scrollToTopButton.style.opacity = "1";
      } else {
        scrollToTopButton.style.opacity = "0";
      }
    });
  
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  
  