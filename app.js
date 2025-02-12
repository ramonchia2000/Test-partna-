const backendUrl = "http://127.0.0.1:8000";  // Replace with your backend API URL

async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch(backendUrl + "/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    const result = await response.json();
    document.getElementById('registerResult').innerText = result.message + " (User ID: " + result.user_id + ")";
}
