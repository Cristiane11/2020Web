/*
    create a new variable named "entriesSection" and assign it
    a value of the HTML section we just created
*/

const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');

function addEntryToDom(event) {
    event.preventDefault();
}

entryForm.addEventListener('submit', addEntryToDom)