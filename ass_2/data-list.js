// Retrieve the stored registration data from Local Storage
const registrations = JSON.parse(localStorage.getItem("registrations")) || [];  //Retrieves data from the browser's Local Storage, and associates it with the key "registrations"
const userList = document.getElementById("userList");

// Display the list of registration data
registrations.forEach(userData => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${userData.name}, Email: ${userData.email}, Password: ${userData.password}`;
    userList.appendChild(listItem);
});