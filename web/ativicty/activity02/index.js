//entryForm is the id that is wrapping the first section
const entryForm = document.getElementById('entryForm');
const entriesSection= document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
// create a function 
function addEntryToDom(event){
    event.preventDefault();
    //Primeiro cria o tag(div)
    const entryDiv = document.createElement('div');
    // cria a class pra style
    entryDiv.className = 'single-entry';
    // vc pega o nome da tag criada e assigned com o resultado o que prescisa append 
    entryDiv.innerText = entryTextbox.value;
    //
    entryDiv.style.display = 'none';
    console.log(entryDiv);
    //com o nome daonde vai a append poem o nome do que prescisa mostra na frente
    entriesSection.appendChild(entryDiv);
    entryTextbox.value = '';
   // console.log(entryTextbox[0].value)

   const displayEntryButton = document.createElement('button');
   displayEntryButton.className ='display-entry-button';
   displayEntryButton.innerText =1;
   entriesNav.appendChild(displayEntryButton);
}
//event listener should be on the wrapping section
entryForm.addEventListener('submit',addEntryToDom)
    
