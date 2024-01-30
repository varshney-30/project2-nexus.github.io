'use strict';

const navButtonB = document.querySelector('.navbar .fa-bars');
const navButtonX = document.querySelector('.navbar .fa-x');
const navMenu = document.querySelector('nav ul');
const nav = document.querySelector('.nav');
const backOpen = document.querySelector('.background-opacity-nav-open');

navButtonB.addEventListener('click', () => {
        nav.classList.add('show-nav');
        navMenu.classList.add('show');
        navMenu.classList.add('show-menu-responsive');
        navButtonB.classList.add('not-show');
        navButtonX.classList.remove('not-show');
        backOpen.classList.remove('not-show');
});

navButtonX.addEventListener('click', () => {
    console.log(navMenu.className);
    if (navMenu.className = 'show') {
        nav.classList.remove('show-nav');
        navMenu.classList.remove('show');
        navMenu.classList.remove('show-menu-responsive');
        navButtonB.classList.remove('not-show');
        navButtonX.classList.add('not-show');
        backOpen.classList.add('not-show');
    }
});

navMenu.addEventListener('click', () => {
    if (navMenu.className = 'show') {
        nav.classList.remove('show-nav');
        navMenu.classList.remove('show');
        navButtonB.classList.remove('not-show');
        navButtonX.classList.add('not-show');
        backOpen.classList.add('not-show');
    }
});

//Contact-me form

const sendBtn = document.querySelector('.send-btn');
const contactName = document.querySelector('.c-name');
const contactPhone = document.querySelector('.c-phone');
const contactEmail = document.querySelector('.c-email');
const messageName = document.querySelector('.f-name');
const messagePhone = document.querySelector('.f-phone');
const messageEmail = document.querySelector('.f-email');
const messageSubmit = document.querySelector('.submit-feedback');

function isEmail(mail) {
    let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (patternEmail.test(mail)) {
        return true;
    }
    return false;
}

function isName(name) {
    let patternName = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
     if (patternName.test(name)) {
        return true;
    }
    return false;
}

function isPhoneNumber(number) {
    let patternPhone = /^\d{10}$/;
    if (patternPhone.test(number)) {
        return true;
    }
    return false;
}

sendBtn.addEventListener('click', () => {

    if (!isName(contactName.value.trim())) {
        messageName.style.display = 'block'
    } else { 
        messageName.style.display = 'none';
    }

    if (!isPhoneNumber(contactPhone.value.trim())) {
        messagePhone.style.display = 'block'
    } else { 
        messagePhone.style.display = 'none';
    }
    
    if (!isEmail(contactEmail.value.trim())) {
        messageEmail.style.display = 'block'
    } else { 
        messageEmail.style.display = 'none';
    } 

    if (isName(contactName.value.trim()) && isPhoneNumber(contactPhone.value.trim()) && isEmail(contactEmail.value.trim())) {
        messageSubmit.style.display = 'block'
    } else { 
        messageSubmit.style.display = 'none';
    } 
});

/*
sendBtn.addEventListener('click', function () {
    // Retrieve values from contact input fields
    const nameValue = contactName.value;
    const phoneValue = contactPhone.value;
    const emailValue = contactEmail.value;

    // Create an object with the contact details
    const contactDetails = {
        name: nameValue,
        phone: phoneValue,
        email: emailValue
    };

    // Convert the object to a JSON string
    const contactDetailsJSON = JSON.stringify(contactDetails);

    // Store the JSON string in localStorage
    localStorage.setItem('contactDetails', contactDetailsJSON);

    // Optionally, you can clear the form or perform other actions
    contactName.value = '';
    contactPhone.value = '';
    contactEmail.value = '';

    // Inform the user that the data has been stored (optional)
    alert('Contact details have been stored in localStorage.');

    setTimeout(function () {
        localStorage.removeItem('contactDetails');
        alert('Contact details have been automatically cleared from localStorage after 5 days.');
    }, 5 * 24 * 60 * 60 * 1000); // 5 days
    
    // Call the function to store contact details
    ContactDetails();
});
*/

// Function to store contact details in localStorage
function storeContactDetails() {
    // Retrieve values from contact input fields
    const nameValue = contactName.value;
    const phoneValue = contactPhone.value;
    const emailValue = contactEmail.value;
    const messageValue = messageName.value;

    // Create an object with the contact details
    const contactDetails = {
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        msg: messageValue
    };

    // Use a timestamp as a unique key
    const timestamp = new Date().getTime();
    const key = `contactDetails_${timestamp}`;

    // Convert the object to a JSON string
    const contactDetailsJSON = JSON.stringify(contactDetails);

    // Store the JSON string in localStorage with a unique key
    localStorage.setItem(key, contactDetailsJSON);

    // Optionally, you can clear the form or perform other actions
    contactName.value = '';
    contactPhone.value = '';
    contactEmail.value = '';
    messageName.value = '';

    // Inform the user that the data has been stored (optional)
    alert(`Contact details with key ${key} have been stored in localStorage.`);

    // Set a timeout to delete the data after 5 days
    setTimeout(function () {
        localStorage.removeItem(key);
        alert(`Contact details with key ${key} have been automatically cleared from localStorage after 5 days.`);
    }, 5 * 24 * 60 * 60 * 1000); // 5 days
}



// Add event listener for the "Send Contact Details" button
sendBtn.addEventListener('click', storeContactDetails);

