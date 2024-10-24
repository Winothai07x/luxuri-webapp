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

function openAdminDrawer(mode, adminData = null) {
  const drawerTitle = document.getElementById("drawer-title");
  const submitBtn = document.getElementById("submit-btn");

  if (mode === "edit") {
    // Change title and button text for edit mode
    drawerTitle.textContent = "EDIT";
    submitBtn.textContent = "UPDATE";

    // Pre-populate form fields with admin data
    document.getElementById("admin-id").value = adminData.adminId;
    document.getElementById("name").value = adminData.name;
    document.getElementById("email").value = adminData.email;
    document.getElementById("tel").value = adminData.tel;
    // Handle other fields like password or picture if necessary
  } else {
    // Change title and button text for add mode
    drawerTitle.textContent = "ADD";
    submitBtn.textContent = "SAVE";

    // Clear form fields
    document.getElementById("admin-form").reset();
  }

  toggleDrawer("admin-drawer");
}

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
