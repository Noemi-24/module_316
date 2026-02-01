// Exercise 09: Modifying Attributes
// ==================================

// ===== Part 1: Basic getAttribute/setAttribute =====

const testLink = document.getElementById('test-link');
const linkInfo = document.getElementById('link-info');

// 1. When "Show Attributes" is clicked, display the href, target, and title 
// of #test-link in #link-info
const showBtn = document.getElementById('show-attrs-btn');
const href = testLink.getAttribute('href');     
const target = testLink.getAttribute('target') ||'not set'; 
const title = testLink.getAttribute('title') || 'not set'; 

showBtn.addEventListener('click', () => {
    linkInfo.innerHTML = `
    <strong>href:</strong> ${href} <br>
    <strong>target:</strong> ${target} <br>
    <strong>title:</strong> ${title}`;
});


// 2. When "Change URL" is clicked, change the href to "https://google.com"
// and update the title attribute too
const changeBtn = document.getElementById('change-href-btn');

changeBtn.addEventListener('click', () =>{
    testLink.setAttribute('href', 'https://google.com');
    testLink.setAttribute('title', 'Google');
    testLink.textContent = 'Visit Google';
});

// 3. When "Toggle Target" is clicked, toggle the target attribute
// If it's "_blank", change to "_self" (and vice versa)
// If the attribute doesn't exist, add target="_blank"
const toggleBtn = document.getElementById('toggle-target-btn');

toggleBtn.addEventListener('click', () => {    
    if(testLink.hasAttribute('target')){
        const currentTarget = testLink.getAttribute('target');
        testLink.setAttribute('target', currentTarget === '_blank' ? '_self' : '_blank');
    }else{
         testLink.setAttribute('target', '_blank');
    }
});

// ===== Part 2: Image Attributes =====

const mainImage = document.getElementById('main-image');
const imageInfo = document.getElementById('image-info');
let imageIndex = 1;

// 4. When "Change Image" is clicked, change the image src to a new random image
// Also update the alt attribute
// Hint: Use https://picsum.photos/300/200?random=N where N is a number
const changeImgBtn = document.getElementById('change-image-btn');

changeImgBtn.addEventListener('click', () => {
    imageIndex++;
    mainImage.setAttribute('src', `https://picsum.photos/300/200?random=${imageIndex}`);
    mainImage.setAttribute('alt', `Random image ${imageIndex}`);
});


// 5. When "Show Image Info" is clicked, display the src, alt, and loading 
// attributes in #image-info
const showImgBtn = document.getElementById('show-image-info-btn')

showImgBtn.addEventListener('click', () => {
    imageInfo.innerHTML = `
    <strong>src:</strong> ${mainImage.getAttribute('src')} <br>
    <strong>alt:</strong> ${mainImage.getAttribute('alt') || 'not set'} <br>
    <strong>loading:</strong> ${mainImage.getAttribute('loading') || 'not set'}`;
});

// ===== Part 3: Form Attributes =====

const agreeCheckbox = document.getElementById('agree-checkbox');
const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name-input');

// 6. When the checkbox is checked, enable the submit button (remove disabled)
// When unchecked, disable the button (add disabled)
agreeCheckbox.addEventListener('change', () => {
     if(agreeCheckbox.checked){
        submitBtn.removeAttribute('disabled');
    }else{
        submitBtn.setAttribute('disable', 'true');
    }
});

// 7. Log the input's placeholder and maxlength attributes when the page loads
console.log(nameInput.getAttribute('placeholder'));
console.log(nameInput.getAttribute('maxlength'));

// 8. Change the input's placeholder when it receives focus
// and change it back when it loses focus
nameInput.addEventListener('focus', () => {
    nameInput.setAttribute('placeholder', 'Start typing...');
});
nameInput.addEventListener('blur', () => {
    nameInput.setAttribute('placeholder', 'Enter your name');
});


// ===== Part 4: Data Attributes =====

const cart = [];
const cartDisplay = document.getElementById('cart-display');

// 9. Add click handlers to the "Add to Cart" buttons
// When clicked, get the product's data-id, data-price, and data-category
// Add the product to the cart array and update the cart display
const addCartBtn = document.querySelectorAll('.add-to-cart-btn');

addCartBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.currentTarget.closest('.product-card');
        const product = {
            id: card.dataset.id,
            price: card.dataset.price,
            category: card.dataset.category
        }
        cart.push(product);

        cartDisplay.textContent = cart
            .map(item => `Product ID: ${item.id} - price: $${item.price} - category: ${item.category}`)
            .join(' | ');
        
    });
});

// 10. Toggle the "selected" class on product cards when clicked
// Also update the data-selected attribute to "true" or "false"
addCartBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.currentTarget.closest('.product-card');

        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
            card.setAttribute('data-selected', 'false');
        } else {
            card.classList.add('selected');
            card.setAttribute('data-selected', 'true');
        }
    });
});

// 11. Filter products by category - log all products in the "electronics" category
// addCartBtn.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const card = e.currentTarget.closest('.product-card');
//         console.log(card.dataset.category === 'electronics')
//     });
// });

const electronics = document.querySelectorAll('[data-category ="electronics"]');
console.log([...electronics].map(p => p.dataset.id));


// ===== Part 5: Tab Interface =====

// 12. Implement the tab functionality using data attributes:
// - When a tab is clicked, get its data-tab value
// - Hide all tab content (remove 'active' class)
// - Show the matching content (where data-content matches data-tab)
// - Update tab active states
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        
        // Hide all content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Show selected content
        document.querySelector(`[data-content="${tabId}"]`).classList.add('active');
        
        // Update active tab
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});


// ===== Part 6: Links Management =====
const links = document.querySelectorAll('.link-list a');

// 13. Add target="_blank" to all external links (those starting with http)
links.forEach(link => {
    const currentHref = link.getAttribute('href');
    if(currentHref && currentHref.includes('https')){
        link.setAttribute('target', '_blank'); 
    }     
});


// 14. When "Open External in New Tab" is clicked, add target="_blank" and 
// rel="noopener noreferrer" to all external links
document.getElementById('open-external-btn').addEventListener('click',() => {
    links.forEach(link => {
        const currentHref = link.getAttribute('href');
        if(currentHref && currentHref.includes('https')){
            link.setAttribute('target', '_blank'); 
            link.setAttribute('rel', 'noopener noreferrer');
        }  
    });
});


// 15. Add a download attribute to a specific link
const allLinks = Array.from(document.querySelectorAll('a'));

document.getElementById('add-download-btn').addEventListener('click',() => {    
    const link = allLinks.find(a => a.textContent.includes('About'));
    if(link){
        link.setAttribute('download', 'file.pdf');
    }        
});



// ===== BONUS Challenges =====

// 16. Create a function that copies all data attributes from one element to another
// function copyDataAttributes(source, target) { ... }
// Your code here:


// 17. Create a tooltip system using data-tooltip attribute
// When hovering over elements with data-tooltip, show the tooltip text
// Your code here:


// 18. Create a function that logs all attributes of an element
// function logAllAttributes(element) { ... }
// Your code here:

