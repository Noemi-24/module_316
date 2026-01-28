// Exercise 03: DOM Traversal
// ===========================
// Use DOM traversal methods to navigate between elements.
// Avoid using getElementById or querySelector for these exercises
// (except for the initial element selection where specified).

// Get a starting element to work from
const activeNavItem = document.querySelector('.nav-item.active');
const secondCard = document.getElementById('card-2');
const firstActionBtn = document.querySelector('.action-btn');

// ===== Part 1: Parent Navigation =====

// 1. Starting from activeNavItem, get its parent element (the <ul>)
const parent = activeNavItem.parentElement;
console.log(parent);

// 2. From the activeNavItem, navigate up to find the <nav> element
// Hint: Use parentElement twice, or use closest()
const ancestor = activeNavItem.closest("nav")
console.log(ancestor);

// 3. From firstActionBtn, find the closest .card ancestor
const ancestorCard = firstActionBtn.closest(".card");
console.log(ancestorCard);

// 4. From secondCard, navigate to its parent (main#content)
const cardParent = secondCard.parentElement;
console.log(cardParent);


// ===== Part 2: Child Navigation =====

// 5. Get the nav-list element and find all its child elements
const navList = document.getElementById('nav-list');
const kids = navList.children;
console.log(kids);

// 6. Get the first child element of the navList
const firstNavChild = navList.firstElementChild;
console.log(firstNavChild);

// 7. Get the last child element of the navList
const lastNavChild = navList.lastElementChild;
console.log(lastNavChild);

// 8. Get all children of secondCard
const cardChildren = secondCard.children;
console.log(cardChildren);

// 9. Get the first element child of secondCard (the h2)
const firstCardChild = secondCard.firstElementChild;
console.log(firstCardChild);


// ===== Part 3: Sibling Navigation =====

// 10. From activeNavItem ("About"), get the previous sibling ("Home")
const prevLink = activeNavItem.previousElementSibling;
console.log(prevLink);

// 11. From activeNavItem ("About"), get the next sibling ("Services")
const nextLink = activeNavItem.nextElementSibling;
console.log(nextLink);

// 12. From secondCard, get the previous sibling card (card-1)
const prevCard = secondCard.previousElementSibling;
console.log(prevCard);

// 13. From secondCard, get the next sibling card (card-3)
const nextCard = secondCard.nextElementSibling;
console.log(nextCard);


// ===== Part 4: Combined Navigation =====

// 14. Starting from firstActionBtn, navigate to find the h2 of its card
// Hint: Go up to the card, then down to the first child
const parentHeader = firstActionBtn.closest(".card");
const header = parentHeader.firstElementChild;
console.log(header);


// 15. Starting from secondCard, get the last nav item
// Hint: Navigate up, find header, then nav, then ul, then last child
const navAncestor = secondCard.closest(".container");
const navHeader = navAncestor.querySelector("header");
const lastChild = navHeader.querySelector("ul").lastElementChild;
console.log(lastChild);


// 16. Get all siblings of secondCard
// Hint: Start from parent's first child, then loop through nextElementSibling
const parentCard = secondCard.parentElement;
const firstCard = parentCard.firstElementChild;
let current = firstCard;
const siblings = [];
while(current){
    if (current !== secondCard) {
        siblings.push(current);
    }
    current = current.nextElementSibling;
}

    console.log(siblings);


// ===== Part 5: Counting and Checking =====

// 17. Count how many child elements the main#content has
const main = document.getElementById("content");
console.log(main.children.length);

// 18. Check if secondCard has any children
// Hint: Check if children.length > 0 or use hasChildNodes()
const hasChildren = secondCard.hasChildNodes();
console.log(hasChildren);

// 19. Check if activeNavItem has a previous sibling
const hasPrevSibling = activeNavItem.previousElementSibling !== null;
console.log(hasPrevSibling);


// ===== BONUS Challenges =====

// 20. Write a function that takes an element and returns all its ancestors as an array
function getAncestors(element){
    const ancestors = [];
    let current = element.parentElement;
    while (current) {
        ancestors.push(current);
        current =current.parentElement;
    }
    return ancestor;
}
console.log(getAncestors(activeNavItem));


// 21. Write a function that finds the index of an element among its siblings
function findIndex(element){
    let index = 0;
    let sibling = element.previousElementSibling;
    while (sibling) {
        index++;
        sibling = sibling.previousElementSibling
    }
    return index;
}
console.log(findIndex(activeNavItem));


// 22. Starting from any button, navigate to find the sidebar
const sidebarParent = firstActionBtn.closest(".container").querySelector("#sidebar"); 
// const sidebar = sidebarParent.lastChild;
console.log(sidebarParent);

