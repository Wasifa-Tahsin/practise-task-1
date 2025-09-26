const numbers=[5,56,57,555,58,595,5000000]
const student={
    name:'Afia',
    age:20,
    movies:['Queen','AAA']
}


// template string
const about=`My Name is ${student.name} age of ${student.age} has numbers ${numbers[3]} also liked movies ${student.movies[0]}`
console.log(about);



// arrow functions
const getFiftyFive=()=>55;
const addSixtyFive=num =>num+65
const isEven=x=>x%2===0;
const isOdd=x=>x%2===1
const addThree=(x,y,z)=>x+y+z;
const doMath=(num1,num2)=>{
    const sum=num1+num2
    return sum
}

// spread operator
const newNumbers=[...numbers]


// create a new array from an older array and add an element
const currentNumbers=[...numbers,55555555555]

numbers.push(55555)
numbers.push(5555)
numbers.push(5555)


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

