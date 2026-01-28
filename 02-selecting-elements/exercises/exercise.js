// Exercise 02: Selecting Elements
// =================================
// Complete each task by selecting the specified element(s).
// Log your results to the console to verify.

// ===== Part 1: getElementById =====

// 1. Select the element with id "page-title" and store it in a variable
const pageTitle = document.getElementById("page-title");
console.log(pageTitle);

// 2. Select the element with id "main-header" and store it in a variable
const mainHeader = document.getElementById("main-header");
console.log(mainHeader);

// 3. Select the contact form by its id
const form = document.getElementById("contact-form");
console.log(form);

// 4. Select the submit button by its id
const submitButton = document.getElementById("submit-btn");
console.log(submitButton);


// ===== Part 2: querySelector =====

// 5. Select the first paragraph with class "intro-text"
const paragraph = document.querySelector(".intro-text");
console.log(paragraph);

// 6. Select the navigation element using its class
const navigation = document.querySelector(".navigation");
console.log(navigation);

// 7. Select the h3 element that also has class "special"
const header3 = document.querySelector("h3.special");
console.log(header3);

// 8. Select the first card using its data attribute
// Hint: use [data-id="1"]
const firstCard = document.querySelector("[data-id='1']");
console.log(firstCard);

// 9. Select the email input using an attribute selector
const email = document.querySelector("input[type='email']");
console.log(email);


// ===== Part 3: querySelectorAll =====

// 10. Select ALL nav links and store them in a variable
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);

// 11. Select ALL cards on the page
const cards = document.querySelectorAll(".card");
console.log(cards);

// 12. Select ALL paragraphs with class "intro-text"
const paragraphs = document.querySelectorAll(".intro-text");
console.log(paragraphs);

// 13. Select ALL input elements in the form
const inputs = document.querySelectorAll("#contact-form input");
console.log(inputs);

// 14. Select ALL h2 AND h3 elements on the page
const headings = document.querySelectorAll("h2, h3");
console.log(headings);


// ===== Part 4: Caching and Using Selections =====

// 15. Cache the page title element, then log its text content
const cachedTitle = document.getElementById('page-title');
console.log(cachedTitle.textContent);

// 16. Cache all card titles, then log how many there are
const cardTitles = document.querySelectorAll(".card-title")
console.log(cardTitles.length);

// 17. Select the footer and log its innerHTML
const footer = document.getElementById("main-footer");
console.log(footer.innerText);


// ===== BONUS Challenges =====

// 18. Select the second nav-link (not the first, not all - just the second)
// Hint: Look up :nth-child() or :nth-of-type()
const secondNavLink = document.querySelector(".nav-link:nth-child(2)");
console.log(secondNavLink);

// 19. Select all cards that come after the first one
// Hint: Look up :not(:first-child)
const allCards = document.querySelector(".card:not(:first-child)");
console.log(allCards);

// 20. Convert a NodeList to an array and log it
const items = [...document.querySelectorAll(".card")];
console.log(items);

//Array.from(document.querySelectorAll('.card'));