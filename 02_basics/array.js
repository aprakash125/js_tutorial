// const array=[1,2,3,1,5]// can be resizable , diifrent type . in index form.
// const hero=["spider", "yony" , "tony"]
 const myarray=new Array(1,2,3,4,5)
// console.log(myarray[2])
// myarray.push(6)
// console.log(myarray)
// myarray.pop()
// console.log(myarray)
// myarray.unshift(8)
// console.log(myarray)
// myarray.shift(2)
// console.log(myarray)
// const newarray1=myarray.join()//add he array and convert into strinng
// console.log(newarray1)

// --- slice and spice

console.log('A',myarray)
const new1=myarray.slice(1,3)
console.log('b',myarray)
console.log(new1)
const new2=myarray.splice(1,2)
console.log('C',myarray)
console.log(new2)
