const backendUrl = "http://127.0.0.1:8000";  // Replace with hosted API if needed

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

async function createDraw() {
    const name = document.getElementById('drawName').value;
    const contribution = parseFloat(document.getElementById('contribution').value);
    
    const response = await fetch(backendUrl + "/create_draw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contribution, members: [] })
    });
    
    const result = await response.json();
    document.getElementById('drawResult').innerText = result.message + " (Draw ID: " + result.draw_id + ")";
}

async function makePayment() {
    const userId = document.getElementById('userId').value;
    const drawId = document.getElementById('drawId').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    const response = await fetch(backendUrl + "/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, draw_id: drawId, amount })
    });
    
    const result = await response.json();
    document.getElementById('paymentResult').innerText = result.message;
}
