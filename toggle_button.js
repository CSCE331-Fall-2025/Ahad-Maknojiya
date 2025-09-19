const themeToggle = document.getElementById("themeToggle");
const themeLink = document.getElementById("themeStylesheet");

if (localStorage.getItem("theme") === "styles2") {
  themeLink.setAttribute("href", "styles2.css");
  themeToggle.textContent = "Switch to Light Mode";
}

themeToggle.addEventListener("click", () => {
  if (themeLink.getAttribute("href") === "styles.css") {
    themeLink.setAttribute("href", "styles2.css");
    themeToggle.textContent = "Switch to Light Mode";
    localStorage.setItem("theme", "styles2");
  } else {
    themeLink.setAttribute("href", "styles.css");
    themeToggle.textContent = "Switch to Dark Mode";
    localStorage.setItem("theme", "styles");
  }
});
