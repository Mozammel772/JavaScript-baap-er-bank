const number = [ 7, 8, 4, 3, 9, 7, 1, 6, 5, 2, 0];
const numberSort = number.sort();
// console.log(numberSort);

const friends = [ 'rakib', 'Akib','Jildar','Mahabub','Binoy','Cabib'];
const friendsSort = friends.sort();
// console.log(friendsSort);
//reverset
const friendRevest = friends.reverse();
// console.log(friendRevest);

const friendSortReverse = friends.sort().reverse();
console.log(friendSortReverse);

const numbers =[ 22, 33, 44, 55, 66, 77, 88, 99,100];
const numberInput = numbers.sort(function(a,b) {
    return a-b ;
});
// console.log(numberInput);

const number1 =[ 22, 33, 44, 55, 66, 77, 45, 99,100];
const numberInput1 = number1.sort(function(a,b){
    return a-b;
});
console.log(numberInput1);