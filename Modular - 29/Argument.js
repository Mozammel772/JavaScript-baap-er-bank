function addNumber (){
    // console.log(arguments);
    let result = 0;
    for( const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumber(20 , 30, 40, 50, 354, 450, 245);
console.log(sum);


function getName (firstName , lastName) {
    let fullName = '';
    for( const part of arguments) {
        fullName = fullName + part + ' ';      
    }
    return fullName;
}
const name = getName('alamul','kabul','Sultan','jamal');
console.log(name);