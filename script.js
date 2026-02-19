// script.js
window.onload = function() {
    console.log("Jenkins App Script Loaded.");
    
    // Display current time on the page
    const now = new Date();
    document.getElementById('time-display').innerText = "Last Loaded: " + now.toLocaleTimeString();
};