const user = {name : 'Raju', rollno : 53675, email : 'raju@mail.com'};

console.log( user.name );
console.log( user['rollno'] );
console.log( user.email );

user.location = 'Lucknow';
user.name = 'Raju Rastogi';

console.log(user);

user.subjects = [ 'Math', 'Physics', 'Chemistry', 'Hindi', 'English' ];

console.log(user);

const smartphone = {
    brand : 'Oneplus',
    model : '11R',
    price : 45000,
    colors : ['blue', 'black', 'red']
};

smartphone.price = 50000;
smartphone.colors[1] = 'white';

console.log(smartphone);
console.log('--------------------------------------------');
const phoneList = [
    { brand : 'Oneplus', model : '11R', price : 45000, colors : ['blue', 'black', 'red'] },
    { brand : 'Apple', model : 'iphone 14', price : 70000, colors : ['black', 'red'] },
    { brand : 'Nokia', model : '3310', price : 1200, colors : ['grey', 'white', 'black'] },
    { brand : 'Xiaomi', model : '12 Pro', price : 34000, colors : ['blue', 'yellow'] },
    { brand : 'Vivo', model : 't1', price : 56000, colors : ['red', 'black'] },
];

console.log(phoneList[0].price);
console.log(phoneList[0].colors[2]);
phoneList[2].colors[1] = 'blue';

console.log('-------------------------------------------------');

for(let phone of phoneList){
    console.log(phone.brand);
    console.log(phone.colors);
}

const brands = phoneList.map( (phone) => { return phone.brand } );
console.log(brands);

const colorList = phoneList.map( (phone) => { return phone.colors } );
console.log(new Set(colorList.flat()));

const laptop = {brand : 'Asus', model : 'Vivobook 14', price : 52000};
console.log(laptop);
delete laptop.price;
console.log(laptop);