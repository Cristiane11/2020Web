//entryForm is the id that is wrapping the first section
const entryForm = document.getElementById('entryForm');
const entriesSection= document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');

// create a function 
function addEntryToDom(event){
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox[0].value;
    entriesSection.appendChild(entryDiv);
    entryTextbox[0].value = '';
   // console.log(entryTextbox[0].value)
}
//event listener should be on the wrapping section
entryForm.addEventListener('submit',addEntryToDom)
    
