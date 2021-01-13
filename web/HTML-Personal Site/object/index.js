 
 
 var hotel={
     rooms:300,
     availableRooms:function (){
         this.rooms - this.bookedRooms
     },
     bookedRooms:28,
     isPool: true,
     roomsType:['Double bed','Ocean Front','Suite','Smoke Free'],
     petFriendly:false
 }
console.log(hotel.availableRooms());