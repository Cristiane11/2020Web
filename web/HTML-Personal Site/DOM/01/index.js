// var powerRangers = [
//     "Jason Lee Scott", 
//     "Kimberly Hart", 
//     "Zack Taylor", 
//     "Trini Kwan", 
//     "Billy Cranston"
// ]

// var rangersList = document.getElementById("rangers")
// var newName = document.createElement("li")
// newName.textContent = powerRangers[0]
// rangersList.append(newName)

var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]
var rangersList = document.getElementById("rangers")

for (let i=0; i<powerRangers.length; i++){
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
rangersList.append(newName)
}

//using innerHTML
var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "Tommy Oliver"
]

var rangersList = document.getElementById("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}