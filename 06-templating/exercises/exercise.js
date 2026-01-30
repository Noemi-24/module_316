// Exercise 06: Templating with DocumentFragment and cloneNode
// ============================================================

// ===== Part 1: DocumentFragment Basics =====

// 1. Create a DocumentFragment and add 10 list items (1-10) to #numbers-list
// Use a for loop and add all items at once using the fragment
const list = document.getElementById('numbers-list');
const fragment = document.createDocumentFragment();

for (let i = 1; i <=10; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

list.appendChild(fragment);


// 2. Create a function that takes an array of strings and adds them
// to a list element using a DocumentFragment
function addItemsToList(items, listId) {
    const fragment = document.createDocumentFragment();
    items.forEach(item=>{
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li);
    });
    document.getElementById(listId).appendChild(fragment);
}
//Test
addItemsToList(['Apple', 'Banana', 'Cherry'], 'numbers-list');


// ===== Part 2: Using cloneNode =====

// 3. Get the #simple-card-template (hidden in the HTML)
// Clone it and create 3 cards with different titles and descriptions
// Add them to #cards-container
function createCard(title, description){
    const template = document.getElementById('simple-card-template');
    const clone = template.cloneNode(true);

    clone.querySelector('h3').textContent = title;
    clone.querySelector('p').textContent = description;
    return clone;
}
const cardsContainer = document.getElementById('cards-container');
cardsContainer.appendChild(createCard("Step 1", "Wake up at 6 am"));
cardsContainer.appendChild(createCard("Step 2", "Get redy for work"));
cardsContainer.appendChild(createCard("Step 3", "Drive to work"));

// 4. Create a function that takes title and description,
// clones the template, fills in the data, and returns the element
//Same as 3


// ===== Part 3: HTML Template Element =====

// Product data
const products = [
    { 
        name: 'Wireless Headphones', 
        description: 'Premium sound quality',
        price: 99.99,
        image: 'https://picsum.photos/200/120?random=1'
    },
    { 
        name: 'Smart Watch', 
        description: 'Track your fitness',
        price: 199.99,
        image: 'https://picsum.photos/200/120?random=2'
    },
    { 
        name: 'Bluetooth Speaker', 
        description: 'Portable audio bliss',
        price: 49.99,
        image: 'https://picsum.photos/200/120?random=3'
    }
];

// 5. Use the #product-template to create product cards
// Loop through the products array and add each to #products-container
// Use a DocumentFragment for efficiency
function addProductToList(products, listId, templateId) {
    const template = document.getElementById(templateId);
    const container = document.getElementById(listId);    
    
    products.forEach(product=>{
        const clone = template.content.cloneNode(true);

        clone.querySelector('.product-image').src = product.image;
        clone.querySelector('.product-name').textContent = product.name;
        clone.querySelector('.product-description').textContent = product.description;
        clone.querySelector('.price').textContent = `$ ${product.price}`;

        container.appendChild(clone);
    });
}
addProductToList(products, "products-container", "product-template");

// 6. Add event listeners to the "Add to Cart" buttons
// When clicked, log the product name to the console
// Hint: You can add the listener when creating each card
// Your code here (modify your code from #5):
function addProductToList(products, listId, templateId) {
    const template = document.getElementById(templateId);
    const container = document.getElementById(listId);    
    
    products.forEach(product=>{
        const clone = template.content.cloneNode(true);

        clone.querySelector('.product-image').src = product.image;
        clone.querySelector('.product-name').textContent = product.name;
        clone.querySelector('.product-description').textContent = product.description;
        clone.querySelector('.price').textContent = `$ ${product.price}`;
        const button = clone.querySelector('.add-to-cart');
        button.addEventListener('click', () => {
            console.log(product.name);
        });
        container.appendChild(clone);
    });
}
addProductToList(products, "products-container", "product-template");



// ===== Part 4: Users List =====

// User data
const users = [
    { name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://i.pravatar.cc/40?img=1' },
    { name: 'Bob Smith', email: 'bob@example.com', avatar: 'https://i.pravatar.cc/40?img=2' },
    { name: 'Carol White', email: 'carol@example.com', avatar: 'https://i.pravatar.cc/40?img=3' },
    { name: 'David Brown', email: 'david@example.com', avatar: 'https://i.pravatar.cc/40?img=4' }
];

// 7. Use the #user-template to display the users
const userTemplate = document.getElementById('user-template');
const usersContainer = document.getElementById('users-container');   
const userFragment = document.createDocumentFragment();

users.forEach(user=>{
    const clone = userTemplate.content.cloneNode(true);

    clone.querySelector('.avatar').src = user.avatar;
    clone.querySelector('.avatar').alt = user.name;
    clone.querySelector('.name').textContent = user.name;
    clone.querySelector('.email').textContent = user.email;
    userFragment.appendChild(clone);
    
});

usersContainer.appendChild(userFragment);
console.log(usersContainer);


// ===== Part 5: Chat Messages =====

// Message data
const messages = [
    { text: 'Hey! How are you?', time: '10:30 AM', sent: false },
    { text: 'I\'m good, thanks! You?', time: '10:31 AM', sent: true },
    { text: 'Great! Want to grab coffee?', time: '10:32 AM', sent: false },
    { text: 'Sure, sounds good!', time: '10:33 AM', sent: true },
    { text: 'Meet at 3pm?', time: '10:34 AM', sent: false }
];

// 8. Use the #message-template to display the chat messages
// Add the class "sent" or "received" based on the sent property
const chatTemplate = document.getElementById('message-template');
const chatContainer = document.getElementById('chat-container');   
const chatFragment = document.createDocumentFragment();

messages.forEach(m=>{
    const clone = chatTemplate.content.cloneNode(true);

    clone.querySelector('.text').textContent = m.text;
    clone.querySelector('.time').textContent = m.time;
    clone.querySelector('.message').classList.add(m.sent ? "sent" : "received");
    chatFragment.appendChild(clone);
    
});

chatContainer.appendChild(chatFragment);



// ===== Part 6: Performance Test =====

// 9. Create a performance test that compares direct append vs DocumentFragment
// Clicking "Test Slow" should add 1000 items directly
// Clicking "Test Fast" should add 1000 items using a fragment
// Display the time taken in #performance-result
// Your code here:
const resultContainer = document.getElementById('performance-result');
const listContainer = document.getElementById('performance-list');

function createItem(i) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  return li;
}

// --- Test Slow: Direct Append ---
document.getElementById('test-slow').addEventListener('click', () => {
    listContainer.innerHTML = ''; 
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
        listContainer.appendChild(createItem(i));        
    }
    const end =performance.now();
    resultContainer.textContent = `Direct Append took ${(end - start).toFixed(2)} ms`;
});

// --- Test Fast: Using DocumentFragment ---
document.getElementById('test-fast').addEventListener('click', () => {
    listContainer.innerHTML = ''; 
    const start = performance.now();
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 1000; i++) {
        fragment.appendChild(createItem(i));
    }
    listContainer.appendChild(fragment); 

    const end = performance.now(); 
    resultContainer.textContent = `DocumentFragment took ${(end - start).toFixed(2)} ms`;
});


// ===== BONUS Challenges =====

// 10. Create a reusable template factory function
// function createTemplateFactory(templateId) { ... }
// It should return a function that takes data and returns a filled clone
// Your code here:


// 11. Create a function that clears a container and repopulates it from data
// function refreshList(containerId, templateId, data, fillFunction) { ... }
// Your code here:


// 12. Create a nested template system (e.g., a card with multiple items inside)
// Your code here:

