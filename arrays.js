const fruits = ["Apples", "Banana","Oranges"]
const scores = [45,56,78,12,50,46]
const mixed = ["kenya",89,true,null]

console.log(fruits)
console.log(`My favourite fruit is ${fruits[1]}`)
fruits[1]= "Watermelon"
console.log(`My favourite fruit is ${fruits[1]}`)
console.log(fruits)

///In-built functions
fruits.push("Pineapples")
console.log(fruits)


const lastfruit = fruits.pop()
console.log(lastfruit)
console.log(fruits)

///for....each
scores.forEach((score,index) =>{
    console.log(`Item at index ${index} is ${score}`)
//map method creates a new array by transforming every element in the array
const numbers = [1,2,3,4,5,6,7,8,9]
console.log("map...")
const double = numbers.map(number => number*2)
console.log(double)
console.log(numbers)

//create a new array with only element that pass a test

num = [1,2,3,4,5,6,7,8,9]
evenNum = num.filter(num => num%2===0)
console.log(evenNum)

//inbuilt functions

