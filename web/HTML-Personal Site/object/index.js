 
 
 var hotel={
     rooms:300,
     bookedRooms:28,
     availableRooms:function (){
         console.log("Helo")
     },
     isPool: true,
     roomsType:['Double bed','Ocean Front','Suite','Smoke Free'],
     petFriendly:false
 }
 document.getElementById("roomsAvailables").innerHTML = hotel.rooms;