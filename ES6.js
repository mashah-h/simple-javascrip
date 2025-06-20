//for...of loop

console.log("for..of loop(iterating over arrays)")
const fruits = ["Banana","Apple","Mango","Orange"]
for (const fruit of fruits){
    console.log(fruit)
}

console.log("for..of loop(iterating over strings")
const name = "Joy"
for (const letter of name){
    console.log(letter)
}


//for...in loop
const person = {
    name:"Joy",
    age:18,
    gender:"Female",
    city:"Nairobi"
}
for (const key in person){
    if (Object.hasOwnProperty.call(person,key)){
        console.log(`person key ${key},value: ${person[key]}`)
    }
}
