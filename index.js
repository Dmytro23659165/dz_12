let user = {
    mood: `happy`,
    hobby: 'lego', 
    premium: `true`, 
}
user.hobby = `skydiving`;
user.premium = `false`;

for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}


let user = {
    mood: `happy`,
    hobby: 'lego', 
    premium: `true`, 
}
function countProps(obj){
    let keys = Object.keys(obj)
    return keys.length;
}
console.log(countProps(user));


let user = [
    {name: `Dima`, timeWork: 2000},
    {name: `Roman`, timeWork: 4000},
    {name: `Oleh`, timeWork: 200},
]
function findBestEmployee(employees){
    const userWork = employees.filter(employees => employees.timeWork > 1000);
    return userWork;
}
console.log(findBestEmployee(user));


let user = {
    Dima: 2000,
    Roman: 3000,
    Oleh: 200,
}
function countTotalSalary(employees){
    let sum = 0;
    for (const arr of Object.values(employees)){
        sum += arr
    }
    return sum;
}
console.log(countTotalSalary(user))


let user = [
    {name: 'Dima', prop: 2000},
    {name: 'Roman', prop: 4000},
    {name: 'Oleh', prop: 200},
];
function getAllPropValues(arr, prop) {
    let getText = arr.map(obj => obj[prop]).filter(value => value !== undefined);
    return getText;
}
console.log(getAllPropValues(user, 'prop'));
// console.log(getAllPropValues(user, 'name'));


let user = [
    { name: 'Apple', price: 30, quantity: 3 },
    { name: 'Banana', price: 10, quantity: 5 },
    { name: 'Orange', price: 20, quantity: 2 }
];
function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(product => product.name === productName);
    return product ? product.price * product.quantity : 0;
}
console.log(calculateTotalPrice(user, 'Apple'));
console.log(calculateTotalPrice(user, 'Banana'));
console.log(calculateTotalPrice(user, 'Orange'));
