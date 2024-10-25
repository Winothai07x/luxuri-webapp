function toggleDrawer(id) {
  const drawer = document.getElementById(id);
  drawer.classList.toggle("open");
}

function closeDrawer(id) {
  const drawer = document.getElementById(id);
  if (drawer.classList.contains("open")) {
    drawer.classList.remove("open");
  }
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

// function ไว้สำหรับ slide ทั้ง add และ edit ใน admin และ product
function openDrawer(entityType, mode, entityData = null) {
  const drawerTitle = document.getElementById("drawer-title");
  const submitBtn = document.getElementById("submit-btn");
  const deleteBtn = document.getElementById("delete-btn");

  if (entityType === "admin") {
    if (mode === "edit") {
      drawerTitle.textContent = "EDIT ADMIN";
      submitBtn.textContent = "UPDATE";
      deleteBtn.style.display = "block";

      // Pre-populate form fields with admin data
      document.getElementById("admin-id").value = entityData.adminId;
      document.getElementById("name").value = entityData.name;
      document.getElementById("email").value = entityData.email;
      document.getElementById("tel").value = entityData.tel;
      // Handle other fields like password or picture if necessary
    } else {
      drawerTitle.textContent = "ADD ADMIN";
      submitBtn.textContent = "SAVE";
      deleteBtn.style.display = "none";

      // Clear form fields
      document.getElementById("admin-form").reset();
    }
  } else if (entityType === "product") {
    if (mode === "edit") {
      drawerTitle.textContent = "EDIT PRODUCT";
      submitBtn.textContent = "UPDATE";
      deleteBtn.style.display = "block";

      // Pre-populate form fields with product data
      document.getElementById("product-id").value = entityData.productId;
      document.getElementById("product-name").value = entityData.name;
      document.getElementById("price").value = entityData.price;
      document.getElementById("category").value = entityData.category;
      document.getElementById("description").value = entityData.description;
      // Handle other fields like images, vendor, etc., if necessary
    } else {
      drawerTitle.textContent = "ADD PRODUCT";
      submitBtn.textContent = "SAVE";
      deleteBtn.style.display = "none";

      // Clear form fields
      document.getElementById("product-form").reset();
    }
  }

  toggleDrawer(`${entityType}-drawer`);
}

function showDeleteConfirmation(entityType) {
  document.getElementById(`${entityType}-form`).style.display = "none";
  document.getElementById("delete-confirmation").style.display = "flex";
}

function hideDeleteConfirmation(entityType) {
  document.getElementById(`${entityType}-form`).style.display = "block";
  document.getElementById("delete-confirmation").style.display = "none";
}

function confirmDelete(entityType, entityId) {
  console.log(`${entityType} Deleted: ${entityId}`);
  closeDrawerAndReset(entityType);
}

function closeDrawerAndReset(entityType) {
  closeDrawer(`${entityType}-drawer`);
  hideDeleteConfirmation(entityType);
}

// For using
function openAdminDrawer(mode, data) {
  openDrawer("admin", mode, data);
}

function openProductDrawer(mode, data) {
  openDrawer("product", mode, data);
}

// Add or Update Admin
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

    console.log("Admin Form Data: ", formData);
    // TODO: Submit form data to backend

    closeDrawer("admin");
  });

// Add or Update Product
document
  .getElementById("product-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productId = document.getElementById("product-id").value;
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    const productData = {
      productId,
      name,
      price,
      category,
      description,
    };

    console.log("Product Form Data: ", productData);
    // TODO: Submit product data to backend

    closeDrawer("product");
  });
