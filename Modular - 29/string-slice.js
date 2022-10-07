const names = 'Amer sonar Bangla ami tomai valobasi';
const words = names.split(' ');
// console.log(words);
const word = names.split('a');
// console.log(word)

// slice
const wordSlice = names.slice(5 , 15);
// // console.log(wordSlice);

//substr
const wordSubstr = names.substr(17 ,5);
// console.log(wordSubstr);
// substring
const wordsubstring = names.substring(15,4);
console.log(wordsubstring);
//concat
const firstName = 'Akash';
const second = ' Ahamed';
// const fullName = firstName + second;
const fullName = firstName.concat(second).concat(' Ami Bindas aci');
console.log(fullName);

const word2 = [ 'Alim', 'Badhon', 'Camerano','Devid'];
// const wordJoin = word2.join(', ');
const wordJoin = word2.join('www, ');
console.log(wordJoin);