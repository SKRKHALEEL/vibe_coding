function handleSubmit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  document.getElementById("popup").classList.remove("hidden");

  // Optionally clear the form
  document.getElementById("userForm").reset();

  return false; // Prevent actual form submission
}
