
const registrations = JSON.parse(localStorage.getItem("registrations")) || [];  
const userList = document.getElementById("userList");

registrations.forEach(userData => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${userData.name}, Email: ${userData.email}, Password: ${userData.password}`;
    userList.appendChild(listItem);
});
