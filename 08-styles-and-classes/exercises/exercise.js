// Exercise 08: Modifying Styles and Classes
// ==========================================

// ===== Part 1: Inline Styles =====

const box = document.getElementById('style-box');
const classBox = document.getElementById('class-box');

// 1. When "Change Color" is clicked, change #style-box background to a random color
// Hint: Generate a random hex color
const colorBtn = document.getElementById('change-color-btn');

let hexColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
colorBtn.addEventListener('click', ()=>{
    box.style.backgroundColor = hexColor;
});


// 2. When "Change Size" is clicked, increase the box size by 20px (both width and height)
const sizeBtn = document.getElementById('change-size-btn');
sizeBtn.addEventListener('click', ()=>{
    const currentHeight = box.offsetHeight;
    const currentWidth = box.offsetWidth;
    const newHeight = currentHeight + 20;
    const newWidth = currentWidth + 20;
    box.style.height = newHeight +'px';
    box.style.width = newWidth +'px';
});

// 3. When "Reset" is clicked, reset all inline styles
// Hint: Use element.style.cssText = '' or removeAttribute('style')
const resetBtn = document.getElementById('reset-style-btn');
const styleBox = window.getComputedStyle(box);
const originalBox = styleBox.backgroundColor;
const originaltHeight = box.offsetHeight;
const originalWidth = box.offsetWidth;
resetBtn.addEventListener('click', () =>{
    box.style.background = originalBox;
    box.style.height = originaltHeight +'px';
    box.style.width = originalWidth +'px';
});


// ===== Part 2: classList Methods =====

// 4. Toggle the "rounded" class on #class-box when "Toggle Round" is clicked
const toggleRoundBtn = document.getElementById('toggle-round-btn');
toggleRoundBtn.addEventListener('click', ()=>{
    classBox.classList.toggle('rounded');
});

// 5. Toggle the "large" class on #class-box when "Toggle Large" is clicked
const toggleLargeBtn = document.getElementById('toggle-large-btn');
toggleLargeBtn.addEventListener('click', ()=>{
    classBox.classList.toggle('large');
});

// 6. Toggle the "hidden" class on #class-box when "Toggle Hidden" is clicked
const toggleHiddenBtn = document.getElementById('toggle-hidden-btn');
toggleHiddenBtn.addEventListener('click', ()=>{
    classBox.classList.toggle('hidden');
});

// 7. Add the "highlight" class when "Add Highlight" is clicked
const addHighlightBtn = document.getElementById('add-highlight-btn');
addHighlightBtn.addEventListener('click', ()=>{
    classBox.classList.add('highlight');
});

// 8. Remove the "highlight" class when "Remove Highlight" is clicked
const removeHighlightBtn = document.getElementById('remove-highlight-btn');
removeHighlightBtn.addEventListener('click', ()=>{
    classBox.classList.remove('highlight');
});


// ===== Part 3: Dark Mode =====

// 9. Toggle dark mode on the body when the button is clicked
// Also update the button text to show "Light Mode" or "Dark Mode"
const toggleBtn = document.getElementById('dark-mode-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button text
    const isDark = body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});



// ===== Part 4: Navigation Active State =====

// 10. When a nav link is clicked:
// - Remove 'active' class from all nav links
// - Add 'active' class to the clicked link
// - Update the #current-page text
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active from all
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active to clicked
        link.classList.add('active');
        //Get page name
        const pageName = link.textContent;
        document.getElementById('current-page').textContent = `Current page: ${pageName}`;
    });
});

// ===== Part 5: Accordion =====

// 11. Create an accordion where:
// - Clicking a header toggles its content's "open" class
// - Only one section can be open at a time
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.classList.contains('open');

        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('open');
        });

        if(!isOpen){
            content.classList.add('open');
        }
    });
});


// ===== Part 6: Progress Bar =====

// 12. When the slider changes:
// - Update the progress bar width
// - Update the percentage text inside the bar
// - Add appropriate color class based on value:
//   - 0-33: 'low' (red)
//   - 34-66: 'medium' (yellow)
//   - 67-100: 'high' (green)
const progressBar = document.getElementById('progress-bar');
const progressSlider = document.getElementById('progress-slider');

progressSlider.addEventListener('input', () => {
    const value = progressSlider.value;
    
    // Update width and text
    progressBar.style.width = value + '%';
    progressBar.textContent = value + '%';
    
    // Change color based on progress
    if (value < 33) {
        progressBar.classList.remove('medium', 'high');
        progressBar.classList.add('low');
    } else if (value < 66) {
        progressBar.classList.remove('low', 'high');
        progressBar.classList.add('medium');
    } else {
        progressBar.classList.remove('low', 'medium');
        progressBar.classList.add('high');
    }
});


// ===== Part 7: Card Selection =====

// 13. Allow multiple card selection:
// - Clicking a card toggles its 'selected' class
// - Update #selected-cards to show the values of selected cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () =>{
        card.classList.toggle('selected');

        const selected = document.querySelectorAll('.card.selected');
        const values = [...selected].map(c => c.dataset.value);
        document.getElementById('selected-cards').textContent = values.join(', ');
    });
    
});

// ===== Part 8: Button States =====

// 14. When #action-btn is clicked:
// - Toggle the 'active' class
// - Change text between "Click Me" and "Clicked!"
const actionBtn = document.getElementById('action-btn');

actionBtn.addEventListener('click', () => {
    actionBtn.classList.toggle('active');

    const isActive = actionBtn.classList.contains('active');
    actionBtn.textContent = isActive ? 'Clicked!' : 'Click me';
});

// 15. When #loading-btn is clicked:
// - Add 'disabled' class
// - Change text to "Loading..."
// - After 2 seconds, remove 'disabled' class and change text back to "Submit"
const loadingBtn = document.getElementById('loading-btn');
let timeoutId;

loadingBtn.addEventListener('click', () => {
    loadingBtn.classList.add('disabled');
    loadingBtn.textContent = "Loading...";

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        loadingBtn.classList.remove('disabled');
        loadingBtn.textContent = 'Submit';
        loadingBtn.disabled = false;
    }, 2000);
});



// ===== BONUS Challenges =====

// 16. Create a color picker that changes the background of a box
// using the style property with the input color value
// Your code here:


// 17. Implement a "Select All" / "Deselect All" for the cards
// Your code here:


// 18. Get the computed background color of the body and log it
// Your code here:

