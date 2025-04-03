// Mouse Events
const hoverButton = document.getElementById('hoverButton');
const mouseMessage = document.getElementById('mouseMessage');

hoverButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'Mouse is over the button!';
});

hoverButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = 'Mouse has left the button!';
});

// Keyboard Events
const keyInput = document.getElementById('keyInput');
const keyMessage = document.getElementById('keyMessage');

keyInput.addEventListener('keyup', (event) => {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});

// Form Events
const myForm = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');

// Focus and Blur Events
const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input is focused!';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Input has lost focus!';
});

// Event Delegation
const buttonContainer = document.getElementById('buttonContainer');
const delegationMessage = document.getElementById('delegationMessage');

