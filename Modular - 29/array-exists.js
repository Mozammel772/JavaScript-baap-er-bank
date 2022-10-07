function megaFriend (friends){
    if(Array.isArray(friends)){
        return 'Please go to Array Input';
    }
    let mega = friends[0];
    for( const friend of friends) {
        if( friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['lion', 'Kutub', 'Kabul','Sultan'];
// const myFriend = megaFriend(friends);
// console.log(myFriend);

if(friends.indexOf('kutub') != -1){
    console.log('Kutub is my best friends');
}
if(friends.includes('kutub') != -1){
    console.log('Hello World');
}
