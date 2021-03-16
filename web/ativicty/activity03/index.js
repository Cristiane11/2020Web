const entryForm = document.getElementById("entryForm");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesSection = document.querySelector("#entries");
const entriesNav = document.querySelector('.entries-nav');


function addEntryToDom(event){
    event.preventDefault();
    const entryDiv = document.createElement("div")
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entriesSection.appendChild = (entryDiv);
    entryTextbox.value = '';


}

entryForm.addEventListener('submit', addEntryToDom )






// const entryForm = document.getElementById('entryForm');
// const entriesSection = document.querySelector('#entries');
// const entryTextbox = document.querySelector('.entry-textbox');
// const entriesNav = document.querySelector('.entries-nav');


// function addEntryToDom(event) {
//     event.preventDefault();
//     const entryDiv = document.createElement('div');
//     entryDiv.className = 'single-entry';
//     entryDiv.innerText = entryTextbox.value;
//     entryDiv.style.display = 'none';
//     console.log(entryDiv);
//     entriesSection.appendChild(entryDiv);
//     entryTextbox.value = '';
// }

// entryForm.addEventListener('submit', addEntryToDom)










// const entryForm = document.getElementById('entryForm');
// const entriesSection = document.getElementById('entries');
// const entryTextbox = document.getElementsByClassName('entry-textbox');
// const entriesNav = document.querySelector('.entries-nav');

// /*
//   - In the addEntryToDom() function, create a new variable named
//       displayEntryButton.
//   - Use the document.createElement method to create an HTML button
//       and make that the value of the new variable.
//   - Use the innerText property to set the button's inner text to "1";
//   - Append the button to the entriesNav div we created on line 4.
// */

// function addEntryToDom(event) {
//     event.preventDefault();
//     const entryDiv = document.createElement('div');
//     entryDiv.className = 'single-entry';
//     entryDiv.innerText = entryTextbox[0].value;
//     entryDiv.style.display = 'none';
//     console.log(entryDiv);
//     entriesSection.appendChild(entryDiv);
//     entryTextbox[0].value = '';
// }

// entryForm.addEventListener('submit', addEntryToDom)