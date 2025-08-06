let score="22"

console.log(typeof((score)))

let newScore=Number(score)
console.log(typeof(newScore))

console.log(newScore)
/*
Nan stands for not a number 
Nan value comes when the string cannot be changed to int 
*/

let loogedIn=0
let booleanloogedIn=Boolean(loogedIn)
console.log(booleanloogedIn)

//  Stack(Primitive)gives copy opf the variable valuee 
//  and heap(non-primitive) gives to the reference to
// original value 

studentname="heer"
student1=studentname

student1="Shobhana"
console.log(studentname)
console.log(student1)

user1={
    name:"heer",
    email:"heer@patel200"
}

user2=user1
user2.name="Shobhana"
console.log(user1)
console.log(user2)
