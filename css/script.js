document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const hiddenInput = document.querySelector('input[type="hidden"]');

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const value = parseInt(this.getAttribute("data-value"));
      const question = this.parentElement.getAttribute("data-question");
      hiddenInput.value = value;
      // Remove active class from all stars
      stars.forEach((s) => s.classList.remove("active"));
      // Add active class to clicked star and all preceding stars
      for (let i = 0; i < value; i++) {
        stars[i].classList.add("active");
      }
    });
  });
});
