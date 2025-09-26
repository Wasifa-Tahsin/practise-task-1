//1. how to declare a variable using let and const

const fatherName='Anawer'
let season='rainy'



2.// 6 basic conditions:       >,<,===,!==,<=,>=
// multiple conditions:     &&,||

if(fatherName==='Anawer' ||season==='rainy'){

}
else if(fatherName==='Anawer'){

}
else{

}



// 3.Array
// index
// length,push,
const numbers=[5,56,57,555,58,595,5000000]
numbers[0]=559



// 4. for Loop

for(let i=0;i<numbers.length;i++){
    const number=numbers[i]
    console.log(number);
}



5.// function

function multiply(num1,num2){
    const result=num1*num2
    return result
}

const output=multiply(555,589)
console.log(output);



6. // object
// 3 ways to access property name
const students={
    name:'Afia',
    age:20,
    movies:['Queen','AAA']
}

const myVariable='age'
console.log(students[myVariable]);
console.log(students.age); //direct by property
console.log(students['age']);  //access via property name string
