// Exercise 10: Event Handling
// ============================

// ===== Part 1: Click Events =====

// 1. Add a click event to #click-counter-btn that counts clicks
// Update the button text to show "Clicks: N"
let counter = 0;
const counterBtn = document.getElementById('click-counter-btn');

counterBtn.addEventListener('click', () =>{
    counter++;
    counterBtn.textContent = `Clicks: ${counter}`;
});

// 2. Add a click event to #toggle-btn that toggles between ON/OFF
// Also toggle the 'active' class
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    toggleBtn.textContent = toggleBtn.classList.contains('active') ? 'ON' : 'OFF';
});


// 3. Add a double-click event to #double-click-btn
// Change the text to "Double Clicked!" and change background to green
const doubleClickBtn = document.getElementById('double-click-btn');

doubleClickBtn.addEventListener('dblclick', () => {
    doubleClickBtn.textContent = 'Double Clicked!';
    doubleClickBtn.style.backgroundColor = 'green';
});


// ===== Part 2: Mouse Events =====

const mouseBox = document.getElementById('mouse-box');

// 4. Add mouseover event to change the box color to green
mouseBox.addEventListener('mouseover', () =>{
    mouseBox.style.backgroundColor = 'green';
});

// 5. Add mouseout event to change the box color back to blue
mouseBox.addEventListener('mouseout', () =>{
    mouseBox.style.backgroundColor = '#007bff';
});

// 6. Add mousemove event to #mouse-tracker that displays the mouse coordinates
// Update #mouse-pos with the current position
document.getElementById('mouse-tracker').addEventListener('mousemove', (e) => {
    document.getElementById('mouse-pos').textContent = ` X: ${e.clientX}, Y: ${e.clientY}`;
});

// 7. Add mousedown and mouseup events to the box
// - mousedown: scale the box to 0.9
// - mouseup: scale back to 1
mouseBox.addEventListener('mousedown', () => {
    mouseBox.style.scale = '0.9';
});

mouseBox.addEventListener('mouseup', () => {
    mouseBox.style.scale = '1';
});


// ===== Part 3: Keyboard Events =====

// 8. Add keydown event to #keyboard-input
// Display the pressed key in #key-display
// Show the key, keyCode, and whether Shift/Ctrl/Alt was held
const keyboardInput = document.getElementById('keyboard-input');

keyboardInput.addEventListener('keydown', (e) => {
    document.getElementById('key-display').textContent = 
        `Key: ${e.key} | Code: ${e.code} | 
        Shift Held: ${e.shiftKey} | Ctrl Held: ${e.ctrlKey} | Alt Held: ${e.altKey}`
    });

// 9. Add keyup event that clears the display after 1 second
keyboardInput.addEventListener('keyup', () => {
    setTimeout(() => {
        document.getElementById('key-display').textContent = 'Press any key'
    }, 1000);
});


// ===== Part 4: Form Events =====

// 10. Add submit event to #demo-form
// Prevent the default submission
// Display the form data in #form-output
const demoForm = document.getElementById('demo-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const formOutput = document.getElementById('form-output');

demoForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    formOutput.innerHTML = `
        <p> Username: ${username.value} </p>
        <p> Email: ${email.value} </p>`; 
});

// 11. Add input event to #username
// Show live character count
username.addEventListener('input', () => {
    console.log(`Char count: ${username.value.length}`);
    // formOutput.innerHTML = `
    // <p> Char count: ${username.value.length}</p>`;
});

// 12. Add focus and blur events to #email
// Add/remove a 'focused' class (style it if you want)
email.addEventListener('focus', () => {
    email.style.boxShadow = '0 0 20px rgba(84, 63, 222, 0.5)';
});
email.addEventListener('blur', () => {
    email.style.boxShadow = 'none';
});


// ===== Part 5: Event Delegation =====

let itemCounter = 3;

// 13. Add click event to #add-item-btn to add new items to the list
const addItemBtn = document.getElementById('add-item-btn');
const todoList = document.getElementById('todo-list');

addItemBtn.addEventListener('click', (e) => {
    itemCounter++;
    const listItem = document.createElement('div');
    listItem.className =  'list-item';
    listItem.innerHTML = `
        <input type="checkbox">
        <span>Task ${itemCounter}</span>
        <button class="delete-btn">Delete</button>`;
    todoList.appendChild(listItem);    
});


// 14. Use event delegation on #todo-list to handle:
// - Delete button clicks (remove the item)
// - Checkbox changes (toggle 'completed' class)
todoList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        e.target.closest('.list-item').remove();
    }
    if(e.target.type === 'checkbox'){
        e.target.closest('.list-item').classList.toggle('completed');
    }
});


// ===== Part 6: Event Propagation =====

let stopPropagation = false;
const propagationLog = document.getElementById('propagation-log');
const propagationDemo = document.getElementById('propagation-demo');

// 15. Add click events to all three propagation divs
// Log which element was clicked to #propagation-log
propagationDemo.addEventListener('click', (e) => {
    if(stopPropagation && e.target !== propagationDemo) return;
    propagationLog.textContent =  `Clicked: Outer (blue)`;
});

propagationDemo.querySelector('.inner').addEventListener('click', (e) => {
    if(stopPropagation) e.stopPropagation();
    propagationLog.textContent =  `Clicked: Inner (green)`;
});
propagationDemo.querySelector('.innermost').addEventListener('click', (e) => {
    if(stopPropagation) e.stopPropagation();
    propagationLog.textContent =  `Clicked: Innermost (yellow)`;
});

// 16. Implement the toggle button to enable/disable stopPropagation
const stopPropagationBtn = document.getElementById('stop-propagation-btn');

stopPropagationBtn.addEventListener('click', () => {
    stopPropagation = !stopPropagation;
    stopPropagationBtn.textContent = stopPropagation ? 'Stop Propagation: ON' : 'Toggle Stop Propagation';
});

// ===== Part 7: Prevent Default =====

// 17. Prevent the link from navigating and log a message instead
const preventLinkBtn = document.getElementById('prevented-link');
const preventLog = document.getElementById('prevent-log');

preventLinkBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    preventLog.textContent ='Link click prevented from navigating'
});

// 18. Prevent the form from submitting and log a message instead
const form = document.getElementById('prevented-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    preventLog.textContent = 'Form submit prevented!';
});


// ===== Part 8: Counter with Multiple Events =====

let count = 0;
const counterDisplay = document.getElementById('counter-display');

function updateCounter() {
    counterDisplay.textContent = count;
}

// 19. Add click events to increment, decrement, and reset buttons
document.getElementById('increment-btn').addEventListener('click', () => {
    count++;
    updateCounter(count);
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    count--;
    updateCounter(count);
});

document.getElementById('reset-btn').addEventListener('click', () => {
    count = 0;
    updateCounter(count);
});

// 20. Add keydown event to document
// Arrow Up increases, Arrow Down decreases
// Hold Shift to change by 10 instead of 1
document.getElementById('increment-btn').addEventListener('keydown', (e) => {
    if(e.key === 'ArrowUp'){
        count++;
    }
    if(e.shiftKey && e.key === '+'){
        count += 10;
    }    
    updateCounter(count);
});

document.getElementById('decrement-btn').addEventListener('keydown', (e) => {
   if(e.key === 'ArrowDown'){
        count--;
   }
    if(e.shiftKey && e.key === '-'){
        count -= 10;
    }
    updateCounter(count);
});



// ===== BONUS Challenges =====

// 21. Create a long-press detection (button held for 1+ seconds)
// Your code here:


// 22. Create a drag-and-drop functionality for an element
// Your code here:


// 23. Add a 'once' event that only fires once
// Your code here:

