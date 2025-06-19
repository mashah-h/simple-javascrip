console.log("Counting number from 0 to 5")
//increment to 10
for (let i = 0;i<=10;i++){
    console.log(i)
}
 //increment by 2
 for (let a = 0;a<=10;a+=2){
     console.log(a)
}
//decrement from 10
for (let x = 10;x<=10 && x>0;x--){
    console.log(x)
}
//loops for arrays
console.log("for loop for an array ")
const myColors = ["red","green","blue","yellow"];

for (let j=0 ;j<myColors.length;j++){
    console.log(`Color at index ${j}:${myColors[j]}`)
}
//sort numbers in ascending/descending order
//method 1--inbuilt functions
const numbers1 = [1,5,7,3,8,9]
numbers1.sort()
// numbers1.reverse()--descending
console.log(numbers1)
//method 2--using a for loop
const numbers2 = [89,45,23,49,-72,-65]
for (let m=0;m<numbers2.length;m++){
    for (let y=0;y<numbers2.length-1 -m;y++){
        if(numbers2[y]>numbers2[y+1]){
            //swap values
            const tempval = numbers2[y]
            numbers2[y]= numbers2[y+1]
            numbers2[y+1]=tempval
        }
    }
}
console.log(numbers2)


