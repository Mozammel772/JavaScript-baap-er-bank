const products = [
    'This is Laptop Hp Brand',
    'Laptop is My Heart',
    'laptop is the best Popolar',
    'This is Phone Nokis brand',
    'Hp Elitbook G5 laptop',
    'Apply Phone ',
    'Dell Laptop',
    'laptop',
    'This is My laptop HTC'
];
const seach = 'laptop';

const output = [];
for(const product of products){
    if(product.toLowerCase(). indexOf(seach.toLowerCase()) != -1){
        // output.push(product);
    }
}
// console.log(output);


for(const product of products){
    if(product.toLowerCase().includes(seach.toLowerCase())){
        // output.push(product);
    }
}
console.log(output);
for ( const product of products){
    if(product.toLowerCase().startsWith(seach.toLowerCase())){
        output.push(product);
    }
}
console.log(output);