// Exercise 05: Creating and Adding Elements
// ==========================================

// ===== Part 1: Basic Element Creation =====

// 1. Create a paragraph element, set its text to "Hello, DOM!", and add it to #basic-output
const paragraph = document.createElement('p');
paragraph.textContent = '"Hello, DOM!';
document.getElementById('basic-output').appendChild(paragraph);

// 2. Create a div with the class "card", add some text, and append it to #basic-output
const card = document.createElement('div');
card.classList.add('card');
card.textContent = 'My name is Noemi!';
document.getElementById('basic-output').appendChild(card);

// 3. Create an h3 element, set its text and color (red), and prepend it to #basic-output
const header3 = document.createElement('h3');
header3.textContent = "Greetings:"
header3.style.color = "red";
document.getElementById('basic-output').prepend(header3);

// 4. Create a link (anchor) that goes to "https://example.com", has text "Visit Example",
// Opens in a new tab, and append it to #basic-output
const link = document.createElement('a');
link.href = "https://example.com";
link.target = '_blank';
link.textContent = "Visit Example";
document.getElementById('basic-output').appendChild(link);


// ===== Part 2: List Building =====

// 5. Add "Cherry" to the end of #fruit-list
const cherry = document.createElement('li');
cherry.textContent ='Cherry';
document.getElementById('fruit-list').appendChild(cherry);

// 6. Add "Grape" to the beginning of #fruit-list
const grape = document.createElement('li');
grape.textContent ='Grape';
document.getElementById('fruit-list').prepend(grape);

// 7. Add "Mango" before "Cherry" in the list
// Hint: You'll need to find Cherry first, then use insertBefore
const mango = document.createElement('li');
mango.textContent = 'Mango';
cherry.before(mango);

// 8. Create a function that adds a new fruit to the list
// The function should take the fruit name as a parameter
function addNewFruit(fruit){
    const newFruit = document.createElement('li');
    newFruit.textContent = fruit;
    document.getElementById('fruit-list').appendChild(newFruit);
}
addNewFruit("Orange");

// ===== Part 3: Creating Cards =====

// 9. Create a function called createCard that takes title and description parameters
// It should return a div with class "card", containing an h3 for title and p for description
function createCard(title, description){
    const card = document.createElement('div');
    card.classList.add('card');

    const h3 = document.createElement('h3');
    h3.textContent = title;
    card.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = description;    
    card.appendChild(p);

    return card;
}

// 10. Use your createCard function to add 3 cards to #cards-container
const container = document.getElementById('cards-container');
container.appendChild(createCard("My job", "Junior Software Developer"));
container.appendChild(createCard("My hobby", "crochet and knitting"));
container.appendChild(createCard("My company", "PeopleShores - Accenture"));

// 11. Modify your createCard function to also accept an optional imageUrl parameter
// If provided, add an img element at the top of the card
function createCard(title, description, imageUrl){
    const card = document.createElement('div');
    card.classList.add('card');

    const h3 = document.createElement('h3');
    h3.textContent = title;
    card.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = description;    
    card.appendChild(p);

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
    img.style.maxWidth = '100%';
    card.appendChild(img);

    return card;
}


// ===== Part 4: Todo List =====

// 12. Create a function createTodoItem(text) that creates a todo item
// Each todo item should have:
// - A checkbox input
// - A span with the text
// - A delete button with class "delete-btn" and text "Delete"
// The whole thing should be wrapped in a div with class "todo-item"
function createTodoItem(text){
    const container = document.createElement('div');
    container.classList.add('todo-item');

    const checkbox = document.createElement('input');    
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.style.marginLeft = '10px';

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('delete-btn');

    container.appendChild(checkbox);
    container.appendChild(span);
    container.appendChild(button);

    return container;
}

// 13. Create 3 todo items and add them to #todo-list
const list = document.getElementById('todo-list');
list.appendChild(createTodoItem("Clean kitchen"));
list.appendChild(createTodoItem("Do laundry"));
list.appendChild(createTodoItem("Cook dinner"));

// 14. Make the delete button actually remove the todo item when clicked
// Hint: Use event delegation or add event listener when creating
function createTodoItem(text){
    const container = document.createElement('div');
    container.classList.add('todo-item');

    const checkbox = document.createElement('input');    
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.style.marginLeft = '10px';

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.classList.add('delete-btn');

    button.addEventListener('click', () => {
        container.remove();
    });

    container.appendChild(checkbox);
    container.appendChild(span);
    container.appendChild(button);

    return container;
}


// ===== Part 5: Navigation =====

const navItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' }
];

// 15. Loop through navItems and create navigation links
// Each should be an anchor with class "nav-item"
// Add them all to #main-nav
const mainNav = document.getElementById('main-nav');
navItems.forEach(item => {
    const a = document.createElement('a');    
    a.href = item.href;
    a.textContent = item.text;
    a.classList.add('nav-item');
    mainNav.appendChild(a);
});


// ===== Part 6: Button Factory =====

// 16. Create a function createButton(text, color, onClick) that:
// - Creates a button with the given text
// - Sets the background color to the color parameter
// - Attaches the onClick function as a click event handler
// - Returns the button element
function createButton(text, color, onClick){
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add('btn');
    button.style.backgroundColor = color;
    button.addEventListener('click', onClick);
    return button;
};

// 17. Use createButton to create 3 buttons:
// - "Red Button" (red) - shows alert "Red clicked!"
// - "Green Button" (green) - logs "Green clicked!" to console
// - "Blue Button" (blue) - changes the background of #button-output to blue
// Add all buttons to #button-container
const buttonContainer = document.getElementById('button-container');
const buttonOutput = document.getElementById('button-output');
buttonContainer.appendChild(
    createButton("Red Button", "red", () => alert('Red clicked!'))
);
buttonContainer.appendChild(
    createButton("Green Button", "green", () => alert('Green clicked!'))
);
buttonContainer.appendChild(
    createButton("Blue Button", "blue", () => {
        buttonOutput.style.backgroundColor = 'blue';
        buttonOutput.style.height = '50px';
    })
);
// ===== BONUS Challenges =====

// 18. Create a table from this data:
const tableData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 35, city: 'Chicago' }
];
// Create a table with headers and rows, append to #basic-output
const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';

// Create header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
['Name', 'Age', 'City'].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.style.border = '1px solid #ddd';
    th.style.padding = '8px';
    th.style.backgroundColor = '#f4f4f4';
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Create body
const tableBody = document.createElement('tbody');
tableData.forEach(row => {
    const tr = document.createElement('tr');
    Object.values(row).forEach(cellValue => {
        const td = document.createElement('td');
        td.textContent = cellValue;
        td.style.border = '1px solid #ddd';
        td.style.padding = '8px';
        tr.appendChild(td);
    });
    tableBody.appendChild(tr);
});
table.appendChild(tableBody);
document.getElementById('basic-output').appendChild(table);


// 19. Create a function that takes HTML string and returns a DOM element
function htmlToElement(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstChild;
}
// Usage example:
const domElement = htmlToElement('<div class="container"><h1>Hello World!</h1><p>This is a paragraph.</p></div>');
console.log(domElement); 
document.body.appendChild(domElement); //appends it to the DOM


// 20. Create a modal dialog component
// It should have a title, content, close button, and overlay background
//Overlayer
const modal = document.createElement('div');
modal.classList.add('modal-overlay');
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content-box');
//Create close button
const closeBtn = document.createElement('span');
closeBtn.classList.add('close-btn');
closeBtn.innerHTML = '&times'; //Represents the "X"
//Create title
const title = document.createElement('h2');
title.textContent = "Hello Everyone";
//Modal content
const content = document.createElement('p');
content.textContent = "working from home";
//Assamble the modal
modalContent.appendChild(closeBtn);
modalContent.appendChild(title);
modalContent.appendChild(content);
modal.appendChild(modalContent);
//Append the modal to the body
document.body.appendChild(modal);

