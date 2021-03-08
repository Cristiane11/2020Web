//entryForm is the id that is wrapping the first section
const entryForm = document.getElementById('entryForm');

// create a function 
function addEntryToDom(event){
    event.preventDefault();
}
//event listener should be on the wrapping section
entryForm.addEventListener('submit',addEntryToDom)
    
