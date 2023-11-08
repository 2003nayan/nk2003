document.getElementById("registrationForm"). 
addEventListener("submit", function(event) 
{
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value; 

        fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        } 
    })
    .then(response => response.json())
    .then(data => {
        
        const userData = { name, email, password };
        saveUserData(userData); 

        window.location.href = "data-list.html";
    });
});

function saveUserData(userData) {
    
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    registrations.push(userData); 
    localStorage.setItem("registrations", JSON.stringify(registrations)); 
}
