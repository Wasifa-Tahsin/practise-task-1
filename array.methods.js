const products=[
    {name:'laptop',price:40000,brand:'lenovo',color:'silver'},
    {name:'phone',price:70000,brand:'iPhone',color:'orange'},
    {name:'watch',price:20000,brand:'casio',color:'black'},
    {name:'sunGlass',price:10000,brand:'ray',color:'gray'},
    {name:'Camera',price:100000,brand:'canon',color:'pink'},
    
]

const brands=products.map(product=>product.brand)
console.log(brands);

const prices=products.map(product=>product.price)
console.log(prices);

products.forEach(product=>console.log(product.color))

products.forEach(product=>{

})


// 3.filter

const cheap=products.filter(product=>product.price<=40000)
// console.log(cheap);

const specificName=products.filter(p=>p.name.includes('a'))
console.log(specificName);



// 4.find(shudhu 1st e jeta mil thakbe setai dibe)

const special=products.find(p=>p.name.includes('n'))
console.log(special);