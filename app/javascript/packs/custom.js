document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const passwordField = document.querySelector("#user_password");
    const errorMessage = document.createElement("div");
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";
    form.appendChild(errorMessage);
  
    form.addEventListener("submit", function(event) {
      if (passwordField.value.length < 6) {
        event.preventDefault();
        errorMessage.textContent = "Password must be at least 6 characters long.";
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }
    });
  });
  