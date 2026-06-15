// SIMPLE MVP EMAIL CAPTURE

document.getElementById("emailForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = e.target.querySelector("input").value;

  // MVP placeholder (replace with backend later)
  console.log("Captured email:", email);

  alert("You're on the list. Welcome to SECRET CLUB®");

  e.target.reset();
});
