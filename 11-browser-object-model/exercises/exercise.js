// Exercise 11: Browser Object Model
// ==================================

// ===== Part 1: Window Properties =====

// 1. When "Show Window Info" is clicked, display:
// - innerWidth and innerHeight
// - outerWidth and outerHeight
// - scrollX and scrollY
// Display in #window-info
document.getElementById('show-window-info').addEventListener('click', () => {
    document.getElementById('window-info').innerHTML= `
        <p>Viewport width: ${window.innerWidth}</p>
        <p>Viewport height: ${window.innerHeight}</p>
        <p>Brower window width: ${window.outerWidth}</p>
        <p>browser window height: ${window.outerHeight}</p>
        <p>Horizontal scroll: ${window.scrollX}</p>
        <p>Vertical scroll: ${window.scrollY}</p>`
});

// ===== Part 2: Dialog Methods =====

// 2. Show an alert when #show-alert is clicked
document.getElementById('show-alert').addEventListener('click', ()=>{
    window.alert('Hello');
});

// 3. Show a confirm dialog when #show-confirm is clicked
// Display the result (true/false) in #dialog-result
document.getElementById('show-confirm').addEventListener('click', ()=>{
    const result = confirm('Are you sure you want to delete this?');
    if(result){
        document.getElementById('dialog-result').textContent = result;
    }
});

// 4. Show a prompt when #show-prompt is clicked
// Display what the user entered in #dialog-result
document.getElementById('show-prompt').addEventListener('click', ()=>{
    const name = prompt('What is your name?');
    if (name) {
        document.getElementById('dialog-result').textContent = `Hello, ${name}!`;
    }
});

// ===== Part 3: Location Object =====

// 5. Display location info when the button is clicked:
// - href, protocol, host, pathname, search, hash
document.getElementById('show-location-info').addEventListener('click', () => {
    document.getElementById('location-info').innerHTML= `
        <p>Full URL: ${location.href}</p>
        <p>Protocol: ${location.protocol}</p>
        <p>Host: ${location.host}</p>
        <p>Pathname: ${location.pathname}</p>
        <p>Search: ${location.search}</p>
        <p>Hash: ${location.hash}</p>`
});

// 6. Add a hash to the URL when #add-hash is clicked
document.getElementById('add-hash').addEventListener('click', ()=>{
    location.hash = 'section';
});

// 7. Reload the page when #reload-page is clicked
// (Comment this out during development!)
 document.getElementById('reload-page').addEventListener('click', ()=>{
//  location.reload();
    alert('location.reload() would refresh the page');
});

// ===== Part 4: Navigator Object =====

// 8. Display navigator info:
// - userAgent, language, onLine, cookieEnabled, platform
document.getElementById('show-navigator-info').addEventListener('click', () => {
    document.getElementById('navigator-info').innerHTML= `
        <p>Browser info: ${navigator.userAgent}</p>
        <p>User's Language: ${navigator.language}</p>
        <p>Is user online?: ${navigator.onLine}</p>
        <p>Are cookies enabled?: ${navigator.cookieEnabled}</p>
        <p>OS: ${navigator.platform}</p>`
});

// 9. Update the online status indicator
// Show "Online" or "Offline" with appropriate styling
// Also listen for online/offline events
window.addEventListener('online', () => {
    showNotification('You are back online!');
});

window.addEventListener('offline', () => {
    showNotification('You are offline.');
});

// ===== Part 5: Timers =====

let timerInterval = null;
let seconds = 0;

// Helper function to format time
function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

// 10. Implement start, stop, and reset for the timer
// - Start: Begin counting seconds (use setInterval)
// - Stop: Pause the timer (use clearInterval)
// - Reset: Set back to 00:00
document.getElementById('start-timer').addEventListener('click', () =>{
    let remaining = formatTime(seconds);
    
    const display = document.getElementById('timer-display');
    display.textContent = remaining;
    console.log(remaining);
    const intervalId = setInterval(() => {
        remaining--;
        display.textContent = remaining;
        
        if (remaining <= 0) {
            clearInterval(intervalId);
            display.textContent = 'Time\'s up!';
        }
    }, 1000);    

});


// 11. Implement the countdown button
// When clicked, start a 5-second countdown
// Display "5... 4... 3... 2... 1... Done!"
// Your code here:



// ===== Part 6: Local Storage =====

// 12. Save key-value pairs to localStorage when Save is clicked
// Your code here:


// 13. Display all items in localStorage
// Create a function to refresh the list display
// Your code here:


// 14. Clear all localStorage when Clear All is clicked
// Your code here:


// 15. Load and display stored items when page loads
// Your code here:



// ===== Part 7: Dark Mode with Persistence =====

// 16. Implement dark mode toggle that:
// - Toggles 'dark-mode' class on body
// - Saves preference to localStorage
// - Loads preference when page loads
// Your code here:



// ===== Part 8: Scroll & Screen =====

// 17. Scroll to top smoothly
// Your code here:


// 18. Scroll to bottom smoothly
// Your code here:


// 19. Display screen info:
// - screen.width, screen.height
// - screen.availWidth, screen.availHeight
// - screen.colorDepth
// Your code here:



// ===== BONUS Challenges =====

// 20. Create a "copy to clipboard" button that copies some text
// and shows a confirmation
// Your code here:


// 21. Track and display how many times the user has visited this page
// Using localStorage
// Your code here:


// 22. Implement a debounced window resize handler
// Log the new dimensions, but only after user stops resizing for 300ms
// Your code here:

