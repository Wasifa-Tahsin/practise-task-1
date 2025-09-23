
// const bottle={
//     name:'Water',
//     brand:'apple',
//     price:20,
//     color:'Baby pink',
//     address:{
//         thana:'asddf',
//         district:'Dhaka'
//     }
// }

// console.log(bottle.brand);
// console.log(bottle.address.thana);


// const college={
//     name:'vnc',
//     class:[11,12],
//     events:['science fair','21 feb','bijoy dibos'],
//     unique:{
//         color:'blue',
//         result:{
//             gps:5,
//             merit:'top'
//         }
//     }
// }
// console.log(college.unique.color);
// console.log(college.unique.result.merit);
// console.log(college.events[1]);
// console.log(college);

// delete college.class
// console.log(college);




const mobile={
    brand:'Samsung',
    price:45000,
    color:'black',
    camera:'24mp'
}

for(const prop in mobile){
    console.log(prop);
}