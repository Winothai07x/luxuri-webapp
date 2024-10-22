function loadLeftNavbar() {
  fetch("../../partials/left-navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("left-navbar-placeholder").innerHTML = data;
    });
}

// Add 'active' class to the current navbar link based on the URL
function setActiveLink() {
  const currentPath = window.location.pathname;

  // Get all the navbar links by ID
  const adminManagementLink = document.getElementById("admin-management-link");
  const productManagementLink = document.getElementById(
    "product-management-link"
  );

  // Remove active class from all links
  adminManagementLink.classList.remove("active");
  productManagementLink.classList.remove("active");

  // Add active class based on current URL path
  if (currentPath.includes("admin-management.html")) {
    adminManagementLink.classList.add("active");
  } else if (currentPath.includes("product-management.html")) {
    productManagementLink.classList.add("active");
  }
}

// Call the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", loadLeftNavbar);
document.addEventListener("DOMContentLoaded", setActiveLink);
