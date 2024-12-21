



// Default scripts
function slideToggle(t, e, o) { 0 === t.clientHeight ? j(t, e, o, !0) : j(t, e, o) } function slideUp(t, e, o) { j(t, e, o) } function slideDown(t, e, o) { j(t, e, o, !0) } function j(t, e, o, i) { void 0 === e && (e = 400), void 0 === i && (i = !1), t.style.overflow = "hidden", i && (t.style.display = "block"); var p, l = window.getComputedStyle(t), n = parseFloat(l.getPropertyValue("height")), a = parseFloat(l.getPropertyValue("padding-top")), s = parseFloat(l.getPropertyValue("padding-bottom")), r = parseFloat(l.getPropertyValue("margin-top")), d = parseFloat(l.getPropertyValue("margin-bottom")), g = n / e, y = a / e, m = s / e, u = r / e, h = d / e; window.requestAnimationFrame(function l(x) { void 0 === p && (p = x); var f = x - p; i ? (t.style.height = g * f + "px", t.style.paddingTop = y * f + "px", t.style.paddingBottom = m * f + "px", t.style.marginTop = u * f + "px", t.style.marginBottom = h * f + "px") : (t.style.height = n - g * f + "px", t.style.paddingTop = a - y * f + "px", t.style.paddingBottom = s - m * f + "px", t.style.marginTop = r - u * f + "px", t.style.marginBottom = d - h * f + "px"), f >= e ? (t.style.height = "", t.style.paddingTop = "", t.style.paddingBottom = "", t.style.marginTop = "", t.style.marginBottom = "", t.style.overflow = "", i || (t.style.display = "none"), "function" == typeof o && o()) : window.requestAnimationFrame(l) }) }

let sidebarItems = document.querySelectorAll('.sidebar-item.has-sub');
for (var i = 0; i < sidebarItems.length; i++) {
    let sidebarItem = sidebarItems[i];
    sidebarItems[i].querySelector('.sidebar-link').addEventListener('click', function (e) {
        e.preventDefault();

        let submenu = sidebarItem.querySelector('.submenu');
        if (submenu.classList.contains('active')) submenu.style.display = "block"

        if (submenu.style.display == "none") submenu.classList.add('active')
        else submenu.classList.remove('active')
        slideToggle(submenu, 300)
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    var w = window.innerWidth;
    if (w < 1200) {
        document.getElementById('sidebar').classList.remove('active');
    }
});
window.addEventListener('resize', (event) => {
    var w = window.innerWidth;
    if (w < 1200) {
        document.getElementById('sidebar').classList.remove('active');
    } else {
        document.getElementById('sidebar').classList.add('active');
    }
});

document.querySelector('.burger-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
})
document.querySelector('.sidebar-hide').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');

})


// Perfect Scrollbar Init
if (typeof PerfectScrollbar == 'function') {
    const container = document.querySelector(".sidebar-wrapper");
    const ps = new PerfectScrollbar(container, {
        wheelPropagation: false
    });
}

// Scroll into active sidebar
document.querySelector('.sidebar-item.active').scrollIntoView(true);

// MY SCRIPTS START HERE
// MY SCRIPTS START HERE
// MY SCRIPTS START HERE

//JS for adding sidebar active class 

// New JS for active class add:

document.addEventListener('DOMContentLoaded', function () {
    // Get all the sidebar items
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    // Get the current URL
    const currentUrl = window.location.href;

    // Loop through each sidebar item
    sidebarItems.forEach(function (item) {
        const link = item.querySelector('a'); // Get the anchor element inside the list item

        if (link) {
            const href = link.getAttribute('href');

            // Check if the current URL includes the href or if the current URL is 'form-inward-po.html' or 'form-layout.html'
            if (currentUrl.includes(href) ||
                (href === 'table-datatable.html' && (currentUrl.includes('form-inward-po.html') || currentUrl.includes('form-layout.html')))) {
                // If it matches, add the active class
                item.classList.add('active');
            } else {
                // Otherwise, remove the active class
                item.classList.remove('active');
            }
        }
    });
});


// ------------------

// Function to generate the sequential ID
function generateSequentialId() {
    // Get current date in YYYYMMDD format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed)
    const day = String(today.getDate()).padStart(2, '0'); // Get the day

    // Get the current date string for uniqueness
    const dateStr = `${year}${month}${day}`;

    // Retrieve the last used sequential number from localStorage
    let lastUsedNumber = localStorage.getItem(dateStr);

    // If there's no stored number, start from 1
    if (!lastUsedNumber) {
        lastUsedNumber = 1;
    } else {
        // Increment the number for the next ID
        lastUsedNumber = parseInt(lastUsedNumber) + 1;
    }

    // Store the updated number in localStorage
    localStorage.setItem(dateStr, lastUsedNumber);

    // Format the sequential number as 5 digits
    const formattedNumber = String(lastUsedNumber).padStart(5, '0');

    // Construct the ID in the format MYYYYMMDD-XXXXX
    return `M${year}${month}${day}-${formattedNumber}`;
}

// Function to display the current date in the format 24-Nov-2024
function displayCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = today.toLocaleString('default', { month: 'short' }); // Get the short month name (e.g., Nov)
    const year = today.getFullYear();

    // Format the date as 24-Nov-2024
    const formattedDate = `${day}-${month}-${year}`;

    // Display the current date below the Pass ID
    document.getElementById('current-date').textContent = `Date-Issued: ${formattedDate}`;
}

// Automatically generate the ID when the page loads
document.getElementById('generated-id').textContent = generateSequentialId();

// Display the current date when the page loads
displayCurrentDate();

// ----------------------------------
// Script to populate form dropdown fields:
// JSON data (simulating the loaded JSON file)
const data = {
    "RequesterParty": [
        "Warehouse",
        "Front office",
        "Canteen",
        "Plant",
        "Facility"
    ],
    "VendorList": [
        "HCL Computers",
        "Tata Telecom",
        "VRL Logistics",
        "Amazon Services",
        "KSL Pumps"
    ]
};

// Function to populate a dropdown
function populateDropdown(selectId, optionsArray) {
    const selectElement = document.getElementById(selectId);
    optionsArray.forEach(item => {
        const option = document.createElement('option');
        option.value = item.toLowerCase().replace(/\s+/g, '_');  // Converts text to a valid value (lowercase and underscores)
        option.textContent = item;
        selectElement.appendChild(option);
    });
}

// Populate Requester Party Dropdown
populateDropdown('requestedby', data.RequesterParty);

// Populate Vendor Dropdown
populateDropdown('vendor', data.VendorList);

// =====================
// JS to display numbers in words 
function numberToWords(num) {
    const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const aboveHundred = ["", "Thousand", "Million", "Billion"];

    if (num === 0) return "Zero";

    let words = '';
    let place = 0;

    while (num > 0) {
        if (num % 1000 !== 0) {
            words = `${numberToWordsHelper(num % 1000)} ${aboveHundred[place]} ` + words;
        }
        num = Math.floor(num / 1000);
        place++;
    }

    return words.trim();
}

function numberToWordsHelper(num) {
    const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num === 0) return '';
    if (num < 20) return belowTwenty[num];
    if (num < 100) return `${tens[Math.floor(num / 10)]} ${belowTwenty[num % 10]}`.trim();
    return `${belowTwenty[Math.floor(num / 100)]} Hundred ${numberToWordsHelper(num % 100)}`.trim();
}

function updateQuantityInWords() {
    const quantity = document.getElementById("quantity").value;
    const quantityInWords = document.getElementById("quantityInWords");

    if (quantity) {
        quantityInWords.textContent = numberToWords(quantity);
    } else {
        quantityInWords.textContent = '';
    }
}

// ---------------------
// JS to clone material0 div upon add item
let itemCount = 1; // Track the item number (starts from 1)

document.getElementById('addItemButton').addEventListener('click', function () {
    // Get all the material divs (starting from material0)
    const materialDivs = document.querySelectorAll('.row.d-flex.justify-content-start');

    // Get the last material div in the list
    const lastMaterialDiv = materialDivs[materialDivs.length - 1];

    // Get the item input and quantity input from the last material div
    const itemInput = lastMaterialDiv.querySelector('.form-control[id="item"]');
    const quantityInput = lastMaterialDiv.querySelector('.form-control[id="quantity"]');

    // Check if the "Item" input is filled (alert if empty)
    if (itemInput.value.trim() === "") {
        alert("Please fill in the 'Item' field before adding a new one.");
        return; // Do not proceed with cloning if the item field is empty
    }

    // Get the material0 div (this is the template for cloning)
    const materialDiv = document.getElementById('material0');

    // Clone the material0 div
    const newMaterialDiv = materialDiv.cloneNode(true);

    // Increment the item count
    itemCount++;

    // Update the text (#1 -> #2, #3, etc.)
    const materialNumber = newMaterialDiv.querySelector('.col-md-1.text-center');
    materialNumber.textContent = itemCount + '.';

    // Clear input values in the cloned div (optional, to reset the inputs)
    const inputs = newMaterialDiv.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = ''; // Clear each input field
    });


    // Find and remove the quantityInWords <small> element from the cloned div
    const quantityInWords = newMaterialDiv.querySelector('#quantityInWords');
    if (quantityInWords) {
        quantityInWords.remove(); // Remove the <small> element with id="quantityInWords"
    }

    // Update the id for the cloned div to be unique (material1, material2, etc.)
    newMaterialDiv.id = 'material' + (itemCount);

    // Append the cloned div to the card-body (instead of the end of the document)
    const cardBody = document.querySelector('.clonethis');
    cardBody.appendChild(newMaterialDiv);
});




