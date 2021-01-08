var christianChurchs =["Batista","Methodist","Fousquare","Assembleia Of God", "Calvary"];
document.getElementById("test1").innerHTML = christianChurchs; 

function churchManipulation(){
    christianChurchs.sort();
    document.getElementById("test1").innerHTML = christianChurchs;
}