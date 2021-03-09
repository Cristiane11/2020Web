//entryForm is the id that is wrapping the first section
const entryForm = document.getElementById('entryForm');
const entriesSection= document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');

// create a function 
function addEntryToDom(event){
    event.preventDefault();
    //Primeiro cria o tag(div)
    const entryDiv = document.createElement('div');
    // cria a class pra style
    entryDiv.className = 'single-entry';
    // vc pega o nome da tag criada e assigned com o resultado o que prescisa append 
    entryDiv.innerText = entryTextbox[0].value;
    //com o nome daonde vai a append poem o nome do que prescisa mostra na frente
    entriesSection.appendChild(entryDiv);
    entryTextbox[0].value = '';
   // console.log(entryTextbox[0].value)
}
//event listener should be on the wrapping section
entryForm.addEventListener('submit',addEntryToDom)
    
