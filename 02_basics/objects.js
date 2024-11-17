//object- ket and value funtionality

//to add symbol variable to abject we have to declare it first 
const mykey=Symbol("new syamol")
const myobj={
    name:"ananya",
    age:19,
    [mykey]:"old symbol said",// like we we can call symbol
    location:"patna",
    email:"aanaya@gmail.com",
    isLogged:true,
    loggedInDays:["monday","tuesday"],
}
// we can use 2type
console.log(myobj.location)
console.log(myobj["email"])
//this is how we can fixed our objects
//Object.freeze(myobj)
myobj.age=98
console.log(myobj)
myobj.greetings=function(){
    console.log("hello");
}
console.log(myobj.greetings)
 const newobj={
    name:"tripti",
    class:7
 } 
 newobj.cross=function(){
    console.log(`dont cross the road ${this.name}`);
 }
 console.log(`last statement ${newobj.cross}`)
 