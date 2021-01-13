 
 
 var hotel={
     rooms:300,
     bookedRooms:28,
     availableRooms:function (){
         console.log("fodas")
     },
     isPool: true,
     roomsType:['Double bed','Ocean Front','Suite','Smoke Free'],
     petFriendly:false
 }
 document.getElementById("roomsAvailables").innerHTML = hotel.availableRooms();