// Exercise 04: Iterating Over Collections
// ========================================
// Practice iterating over DOM collections using different methods.

// Helper function to display results
function displayResult(label, value) {
    const output = document.getElementById('output');
    output.innerHTML += `<p><strong>${label}:</strong> ${value}</p>`;
}

// ===== Part 1: Basic Iteration =====

// 1. Use a for loop to log all product names to the console
const products = document.querySelectorAll(".product");
for (let i = 0; i < products.length; i++) {
    console.log(products[i].textContent);    
}

// 2. Use a for...of loop to add the class "processed" to each product
for (const product of products) {
    product.classList.add("processed");
}
console.log('Added "processed" class to all products');

// 3. Use forEach to log each task's text content
const tasks = document.querySelectorAll(".task");
Array.from(tasks).forEach(item =>{
    console.log(item.textContent);
})

// ===== Part 2: forEach with Index =====

// 4. Use forEach to number each nav link (add "1. ", "2. ", etc. before the text)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink, index) => {
    // console.log(`Nav ${index +1}: ${navLink.textContent}`);
    navLink.textContent = `${index +1}: ${navLink.textContent}`;
});
console.log('Numbered all nav links');

// 5. Add a data-index attribute to each task showing its position
 tasks.forEach((task, index) => {
    task.setAttribute('data-index', index + 1);
    //task.dataset.index = index;
});
console.log('Added data-index to all tasks');


// ===== Part 3: Converting and Using Array Methods =====

// 6. Get all products, convert to array, and use map() to get an array of prices
// Display the result using displayResult()
const prices = Array.from(products).map(product => 
    parseFloat(product.dataset.price)
);
displayResult("Prices", prices.join(', '));

// 7. Use filter() to get only products that are on sale
// Log the count of on-sale products
const onSale = [...products].filter(product => 
    product.classList.contains("on-sale")
);
displayResult("On sale", onSale.length);

// 8. Use filter() to get only completed tasks
const completedTasks = [...tasks].filter(task =>
    task.classList.contains("completed")
);
displayResult("Completed tasks", completedTasks.length)

// 9. Use find() to get the first priority task
const firstPriority = [...tasks].find((task) =>
    task.classList.contains("priority")
);
 displayResult("First priority task", firstPriority?.textContent);

// 10. Use reduce() to calculate the total price of all products
const total = [...products].reduce((sum, product) => {
    return sum + parseFloat(product.dataset.price);
}, 0);
displayResult("Total:", `$${total.toFixed(2)}`);


// ===== Part 4: Combining Methods =====

// 11. Get all products in the "electronics" category and calculate their total price
// Hint: filter then reduce
const electronicsTotal = [...products]
    .filter(product => product.dataset.category ==="electronics")
    .reduce((sum, product) => sum + parseFloat(product.dataset.price), 0);
displayResult("Total:", `$${electronicsTotal.toFixed(2)}`);

// 12. Get the names of all on-sale products as an array of strings
// Hint: filter then map
const onSaleNames = [...products]
    .filter(product => product.classList.contains("on-sale"))
    .map(product => product.querySelector("h3").textContent);
displayResult("On sale product name:", onSaleNames.join(', '));

// 13. Find the most expensive product and log its name
// Hint: Use reduce to compare prices
const mostExpensive = [...products]
    .reduce((max, product) => 
        parseFloat(product.dataset.price) > parseFloat(max.dataset.price) ? product : max
    );
displayResult("Most expensive product:", mostExpensive.querySelector("h3").textContent);



// ===== Part 5: Practical Applications =====

// 14. Add click event listeners to all nav links that log their data-page attribute
navLinks.forEach(link=>{
    link.addEventListener("click", (e) => {
         e.preventDefault();
        console.log(link.dataset.page);
    });
});

// 15. Hide all completed tasks (add the "hidden" class)
// const hidden = completedTasks.setAttribute("class", "hidden"); 
completedTasks.forEach(task => {
    task.classList.add("hidden");
});
console.log("Hidden completed tasks");

// 16. Make all priority tasks have red text
const priorityTasks = [...tasks].filter(product => 
    product.classList.contains("priority")
);
priorityTasks.forEach(task => {
    task.style.color = "red";
});
console.log("Red text priority tasks completed");

// 17. Add a sale badge (text "[SALE]") to the beginning of on-sale product names
// Your code here:
onSale.forEach(product => {
    const h3 = product.querySelector('h3');
    h3.textContent = '[SALE] ' + h3.textContent;
});
console.log("Added sale badges");


// ===== Part 6: HTMLCollection vs NodeList =====

// 18. Get products using getElementsByClassName and try to use forEach
// This will fail! Fix it by converting to an array first.
const allProducts = document.getElementsByClassName('product');
Array.from(allProducts).forEach(product =>{
    console.log(product.querySelector('h3').textContent);
})

// 19. Demonstrate the "live" nature of HTMLCollection
// Get the products count, add a new product, check the count again
console.log(allProducts.length); 
document.body.innerHTML += '<div class="product"><h3>New Product</h3><p>Description of new product</p></div>';
console.log(allProducts.length);


// ===== BONUS Challenges =====

// 20. Group products by category and display the count for each
// Expected output: { electronics: 3, clothing: 1, accessories: 1 }
const categories = [...products].reduce((groups, product) => {
    const category = product.dataset.category;
    groups[category] = (groups[category] || 0) + 1;
    return groups;
}, {});
displayResult('Categories', JSON.stringify(categories));


// 21. Create a function that toggles the "completed" class on all tasks
function toggleAllCompleted() {
    document.querySelectorAll('.task').forEach(task => {
        task.classList.toggle('completed');
    });
}
console.log('toggleAllCompleted function created');


// 22. Sort tasks: priority first, then incomplete, then completed
// This is tricky! You'll need to use sort with a custom compare function
function sortTasks() {
    const tasksContainer = document.getElementById('tasks-section');
    const taskElements = [...document.querySelectorAll('.task')];
    
    taskElements.sort((a, b) => {
        const aScore = a.classList.contains('priority') ? 0 : 
                       a.classList.contains('completed') ? 2 : 1;
        const bScore = b.classList.contains('priority') ? 0 : 
                       b.classList.contains('completed') ? 2 : 1;
        return aScore - bScore;
    });
    
    // re-append them to apply the sort
    taskElements.forEach(task => tasksContainer.appendChild(task));
}
console.log('sortTasks function created');

