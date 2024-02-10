// Function to update the counter
function updateCounter() {
    // Send a request to the server to update the counter
    fetch('counter.php')
    .then(response => response.text())
    .then(count => {
        document.getElementById('counter').textContent = count;
    })
    .catch(error => {
        console.error('Error fetching counter:', error);
    });
}

// Call the updateCounter function when the page loads
window.onload = updateCounter;