function loadNavbar() {
  fetch("/partials/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", loadNavbar);
