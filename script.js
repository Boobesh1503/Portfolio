const toggle = document.getElementById("themeToggle");
const body = document.body;

const saved = localStorage.getItem("portfolio-theme");
if (saved === "warm") {
  body.classList.add("warm");
  toggle.textContent = "☾";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("warm");
  const warm = body.classList.contains("warm");
  localStorage.setItem("portfolio-theme", warm ? "warm" : "dark");
  toggle.textContent = warm ? "☾" : "☼";
});
