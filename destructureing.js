
// 1.Array Destructure

const numbers=[43,42]
// const x=numbers[0]
// const y=numbers[1]

// const [x,y]=[43,42]

const [x,y]=numbers
// console.log(x,y);


function boxify(num1,num2){
const nums=[num1,num2]
return nums
}

// const [first,second]=boxify(90,98)

// console.log(boxify(555,55555));


const student={
    name:'Afia',
    age:20,
    movies:['Queen','AAA']
}

const [firstMovie,secondMovie]=student.movies
console.log(firstMovie);



// object destructure
const{name,age}={name:'alu',age:34}


const employee={
    ide:'VS Code',
    designation:'Developer',
    machine:'mac',
    language:['html','css','js'],
    specification:{
        height:66,
        weight:67,
        address:'kallaynpur',
        drink:'water'
    }
}

const {machine,ide}=employee
const {weight,address}=employee.specification


