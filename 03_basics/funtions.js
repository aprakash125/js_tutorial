function sayMyName(){
    console.log("ananya parakash..!")
}
//sayMyName()
// function caddNumber(num1,num2){
//     console.log(num1+num2)
// }
function addNumber(num1,num2){
    // let result=num1+num2
    // return result
    return num1+num2
}
// addNumber(88,22)
const newNum=addNumber(88,22)
//console.log(newNum)

function userlogin(username){
    // if(username=== undefined || username===""){
        if(!username){
        console.log("please enter user name")
        return
    }else{
return `${username} looged in for now..!`
    }

}
const user=userlogin("ananya")
console.log(userlogin())