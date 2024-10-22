function loadLeftNavbar() {
  fetch("/partials/left-navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("left-navbar-placeholder").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", loadLeftNavbar);
