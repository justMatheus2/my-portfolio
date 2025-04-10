document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    validateField(name, "Please enter your name.");
    validateField(email, "Please enter a valid Email.");
    validateField(message, "Please enter your message.");
  });
  
  function validateField(input, message) {
    const value = input.value.trim();
    const parent = input.parentElement;
    const small = parent.querySelector("small");
  
    if (value === "") {
      parent.classList.remove("success");
      parent.classList.add("error");
      small.innerText = message;
      small.style.visibility = "visible"
    } else {
      parent.classList.remove("error");
      parent.classList.add("success");
      small.innerText = "";
      small.style.visibility = "hidden";
    }
  }
  