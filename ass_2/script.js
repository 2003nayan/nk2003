document.getElementById("registrationForm"). 
addEventListener("submit", function(event) // Listens to submit button, once it's clicked this starts it's work.  
{
    event.preventDefault(); // prevents the default behaviour of the form, and sends it to JS to do the further process with the submitted data.

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value; // These 3 lines fetches the values from the submitted data by the user.

    // Simulate a POST request using Fetch API (you can replace this with a real API endpoint)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        } // Sends the user data to the given link in JSON string type, it doesn't actually stores data, but perform real time applications. 
    })
    .then(response => response.json())
    .then(data => {
        // Store the registration data in an array or Local Storage (here, we use an array)
        const userData = { name, email, password };
        saveUserData(userData); //Saves user data here itself

        // Redirect to a new page to display the data
        window.location.href = "data-list.html";
    });
});

function saveUserData(userData) {
    // You can store this data in an array or use Local Storage
    // In this example, we store it in an array
    let registrations = JSON.parse(localStorage.getItem("registrations")) || [];
    registrations.push(userData); // Adds new user data to registrations array.
    localStorage.setItem("registrations", JSON.stringify(registrations)); //This updates the new data in local storage with the key "registrations".
}
