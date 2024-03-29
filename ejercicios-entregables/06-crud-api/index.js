
const apiUrl = "https://647a6c3fd2e5b6101db057b6.mockapi.io/users";
let userIdToEdit = "";
let pagination;
const delImg = "./img/bin.png";
const editImg = "./img/drawing.png";

function fetchUsers() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const itemsPerPage = 20;
            const currentPage = 1;
            const currentPageData = goToPage(data, itemsPerPage, currentPage);
            showUsers(currentPageData);
            showPagination(data, itemsPerPage, currentPage);
        });
}

function showUsers(users) {
    const tableBody = document.querySelector("#userTable tbody");
    tableBody.innerHTML = "";

    users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td> 
            <td>
                <button onclick="openModal('${user.id}')"><img src="${editImg}" alt="edit" class="action-btn-img"></button>
                <button onclick="delteUser('${user.id}')"><img src="${delImg}" alt="edit" class="action-btn-img"></button>

            </td>
        `;
        tableBody.appendChild(row);
    });
}
function addUser() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    };

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
        .then((response) => response.json())
        .then((data) => {
            nameInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";
            closeModal();
            fetchUsers();
        });
}

function delteUser(userId) {
    const confirmDelete = confirm(
        "¿Estás seguro de que deseas eliminar este usuario?"
    );

    if (confirmDelete) {
        fetch(`${apiUrl}/${userId}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                fetchUsers();
            } else {
                alert("Ocurrió un error al eliminar el usuario.");
            }
        });
    }
}

function createUser() {
    const modal = document.getElementById("createUserModal");
    modal.style.display = "block";
}

function openModal(userId) {
    userIdToEdit = userId;

    fetch(`${apiUrl}/${userId}`)
        .then((response) => response.json())
        .then((user) => {
            const editNameInput = document.getElementById("editName");
            const editEmailInput = document.getElementById("editEmail");
            const editPhone = document.getElementById("editPhone");

            editNameInput.value = user.name;
            editEmailInput.value = user.email;
            editPhone.value = user.phone;

            const modal = document.getElementById("editModal");
            modal.style.display = "block";
        });
}

function closeModal() {
    const editModal = document.getElementById("editModal");
    const createModal = document.getElementById("createUserModal");

    if (editModal.style.display === "block") {
        editModal.style.display = "none";
    }

    if (createModal.style.display === "block") {
        createModal.style.display = "none";
    }
}


function storeChanges() {
    const editNameInput = document.getElementById("editName");
    const editEmailInput = document.getElementById("editEmail");
    const editPhone = document.getElementById("editPhone");

    const editedUser = {
        name: editNameInput.value,
        email: editEmailInput.value,
        phone: editPhone.value,
    };

    fetch(`${apiUrl}/${userIdToEdit}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedUser),
    })
        .then((response) => response.json())
        .then((data) => {
            closeModal();
            fetchUsers();
        });
}

function searchUsers() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const filteredUsers = data.filter((user) => {
                const userName = user.name.toLowerCase();
                return userName.includes(searchTerm);
            });

            const itemsPerPage = 20;
            const currentPage = 1;
            const currentPageData = goToPage(filteredUsers, itemsPerPage, currentPage);
            showUsers(currentPageData);
            showPagination(filteredUsers, itemsPerPage, currentPage);
        });
}

function showPagination(data, itemsPerPage, currentPage) {
    const paginationContainer = document.getElementById("pagination");
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    paginationContainer.innerHTML = "";
  
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      if (i === currentPage) {
        button.classList.add("active");
      }
      button.addEventListener("click", () => {
        const users = goToPage(data, itemsPerPage, i);
        showUsers(users);
        showPagination(data, itemsPerPage, i);
      });
      paginationContainer.appendChild(button);
    }
  }
  

fetchUsers();
