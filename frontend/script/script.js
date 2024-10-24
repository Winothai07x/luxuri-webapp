// login.html
function toggleDrawer(id) {
  const drawer = document.getElementById(id);
  drawer.classList.toggle("open");
}

// admin-management.html
const imageInput = document.getElementById("admin-image-input");
const preview = document.getElementById("admin-preview");

imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.innerHTML = ""; // Clear previous image
      preview.appendChild(img);
    };

    reader.readAsDataURL(file); // Convert image to base64
  } else {
    preview.innerHTML = "";
  }
});

// add new admin
document
  .getElementById("admin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const adminId = document.getElementById("admin-id").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;

    const formData = {
      adminId,
      name,
      password,
      email,
      tel,
    };

    console.log(formData);
    // TODO: add post here

    // close drawer
    toggleDrawer("add-new-admin-drawer");
  });
