const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved user preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
} else {
  body.classList.add("light-mode");
}

// Toggle theme on checkbox change
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  }
});

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('show');
}
