//entryForm is the id that is wrapping the first section
const entryForm = document.getElementById('entryForm');

//event listener should be on the wrapping section
entryForm.addEventListener('submit',function(event){
    event.preventDefault();
})