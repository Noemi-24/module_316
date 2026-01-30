// Exercise 07: Modifying Content
// ================================

// ===== Part 1: textContent Basics =====

// 1. When "Change Text" is clicked, change #text-target's text to "The text has been changed!"
const textChange = document.getElementById('text-target');
const changeBtn = document.getElementById('change-text-btn');

changeBtn.addEventListener('click', () => {
    textChange.textContent = "The text has been changed!";
});

// 2. When "Clear Text" is clicked, clear all text from #text-target
// Your code here:
const clearBtn = document.getElementById('clear-text-btn')

clearBtn.addEventListener('click', () => {
    textChange.textContent = "";
});

// ===== Part 2: Understanding Differences =====

// 3. When "Compare" is clicked, display the textContent, innerText, and innerHTML
// of #mixed-content in #comparison-output
// Format it nicely so the differences are clear
document.getElementById('compare-btn').addEventListener('click', () => {
    const content = document.getElementById('mixed-content');
    const containerTxt =  document.getElementById('comparison-output');

    containerTxt.innerHTML = `
        <h3>textContent:</h3><pre>${content.textContent}</pre>
        <h3>innerText:</h3><pre>${content.innerText}</pre>
        <h3>innerHTML:</h3><pre>${content.innerHTML}</pre>
    `;
});


// ===== Part 3: Counter =====

// 4. Implement the counter functionality
// - Clicking + should increment the count
// - Clicking - should decrement the count
// - Clicking Reset should set it back to 0
// Display the count in #counter-display
const displayResult = document.getElementById('counter-display');
let count = 0;

document.getElementById('increment-btn').addEventListener('click', () => {
    count++;
    displayResult.textContent = count;
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    count--;
    displayResult.textContent = count;
});

document.getElementById('reset-btn').addEventListener('click', () => {
    count = 0;
    displayResult.textContent = count;
});


// ===== Part 4: innerHTML =====

// 5. When "Replace with HTML" is clicked, replace #html-container's content
// with a heading and a paragraph
const replaceHtml = document.getElementById('html-container');

document.getElementById('replace-html-btn').addEventListener('click', () => {
    replaceHtml.innerHTML = `<h3>New heading</h3><p>New paragraph</p>`;
});


// 6. When "Add a List" is clicked, add an unordered list with 3 items
// to #html-container (without removing existing content)
document.getElementById('add-list-btn').addEventListener('click', () => {
    replaceHtml.innerHTML += `
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>third item</li>
    </ul>`;
});


// ===== Part 5: User Input Display =====

// 7. As the user types in #user-input, display the text in #input-display
// Make sure to use textContent (not innerHTML) for safety
// If the input is empty, show "Your message will appear here"
const editor = document.getElementById('user-input');
const preview = document.getElementById('input-display');
const originalText = preview.textContent;

editor.addEventListener('input', () => {    
    const text = editor.value.trim();
    if(text === ""){
        preview.textContent = originalText;
    } else{
        preview.textContent = text.replace('<strong>${text}</strong>');
    }    
});


// ===== Part 6: Quote Rotator =====

// 8. Create a quote rotator that cycles through these quotes:
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

// When "Next Quote" is clicked, display the next quote
// Update both #quote-text and #quote-author
let index = 0;
document.getElementById('next-quote-btn').addEventListener('click', () => {
    document.getElementById('quote-text').textContent = quotes[index].text;
    document.getElementById('quote-author').textContent =quotes[index].author;
    index = index + 1 === quotes.length ? 0 : index + 1;
    //index = (index + 1) % quotes.length;
});


// ===== Part 7: Live Preview =====

// 9. As the user types in #preview-input, show the content in #live-preview
// Convert newlines to <br> tags
const previewInput = document.getElementById('preview-input'); 
previewInput.addEventListener('input', () => {    
    const text = previewInput.value.trim();
    const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

    document.getElementById('live-preview').innerHTML = escaped.replace(/\r?\n/g, '<br>');   
});



// ===== Part 8: Word Counter =====

// 10. As the user types in #word-input:
// - Count the number of words and display in #word-count
// - Count the number of characters and display in #char-count
// Hint: split by whitespace and filter empty strings for word count
const wordInput = document.getElementById('word-input');
const displayWordCounter = document.getElementById('word-count');
const displayCharCounter = document.getElementById('char-count');

wordInput.addEventListener('input', () => {
    const text = wordInput.value;

    //Chars without spaces
    const charsOnly = text.replace(/\s/g, '');
    displayCharCounter.textContent = charsOnly.length;

    //Words
    const words = text
        .trim()
        .split(/\s+/)
        .filter(word => word !== '');
    displayWordCounter.textContent = words.length;
});

// ===== BONUS Challenges =====

// 11. Create a simple markdown preview:
// - **text** becomes bold
// - *text* becomes italic
// - # text becomes h1
// Your code here:


// 12. Create a typing effect that reveals text one character at a time
// Your code here:


// 13. Create a function that sanitizes HTML input (removes script tags, etc.)
// Your code here:

