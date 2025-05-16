document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const formMsg = document.getElementById("formMsg");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  const namePattern = /^[a-zA-Z\s]{2,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!name) {
    formMsg.textContent = "Name is required.";
    nameInput.focus();
    return;
  }
  if (!namePattern.test(name)) {
    formMsg.textContent = "Name can only contain letters and spaces.";
    nameInput.focus();
    return;
  }

  // Updated email validation
  if (!email) {
    formMsg.textContent = "Email is required.";
    emailInput.focus();
    return;
  }
  if (!emailPattern.test(email)) {
    formMsg.textContent = "Invalid email format. Example: user@example.com";
    emailInput.focus();
    return;
  }

  formMsg.textContent = "";
  document.getElementById("popup").style.display = "flex";
});

function goToTodo() {
  window.location.href = "todo.html";
}
