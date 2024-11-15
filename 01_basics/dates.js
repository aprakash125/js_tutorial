let mydate= new Date();
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON)

//console.log(mydate.toLocaleString())//11/15/2024, 1:21:58 PM

// console.log(mydate.getHours())
let myContDate=new Date(2024,0,23);
console.log(myContDate.toDateString())//Tue Jan 23 2024
let myContDate2=new Date(2024,0,23,5,3);
console.log(myContDate.toLocaleString())//1/23/2024, 12:00:00 AM
let roomdate=Date.now();
console.log(roomdate)