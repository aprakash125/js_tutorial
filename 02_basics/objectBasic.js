// const tinderObject=new Object();//siingleton object
// const tinderObject1={
//     //non-singleton object
// }
// console.log(tinderObject)
// tinderObject.id=123,
// tinderObject.name="sammy"
// tinderObject.isLoggedIn=false
// console.log(tinderObject)

const tindernew={
    mail:"gmail.com",
    fullNmae:{
        firstname:"ananya",
        last:"prakash",
        payment:{
            upi1:"paytm",
            upi2:"phonepay",
        }
    }
}
//console.log(tindernew.fullNmae.payment.upi1)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign(obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
