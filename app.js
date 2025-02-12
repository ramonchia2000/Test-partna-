const backendUrl = "https://test-partna-1.onrender.com";  // Replace with your backend API URL

async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch(backendUrl + "/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    const result = await response.json();

    if (result.user_id) {
        // Store user ID for session tracking
        localStorage.setItem("userId", result.user_id);
        // Redirect to the Partner Draws page
        window.location.href = "draws.html";
    } else {
        document.getElementById('registerResult').innerText = "Registration failed. Please try again.";
    }
}
