// Create and display an array:
var favoriteRestaurants=["Condel", "Asteka","AppleBeen","Chiles","Olive Garden"]
document.getElementById("test1").innerHTML = favoriteRestaurants;
// First sort the array

function restaurantsActions(){
favoriteRestaurants.sort();
// Then reverse it:
favoriteRestaurants.reverse();
document.getElementById("test1").innerHTML = favoriteRestaurants;
}