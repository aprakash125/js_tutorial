const array=[1,2,3,4,5]
const arraynew=[7,8,9,10]
// arraynew.push(array)
// console.log(arraynew)
const arry2=array.concat(arraynew)
console.log(arry2)

const newtype1=[...array,...arraynew,...arry2]
console.log(newtype1)

const hype =[1,2,[3,4,5,[7,9,8],10],11,12]
const realArray=hype.flat(Infinity)
console.log(realArray)