const players = document.getElementsByClassName('player');
for ( const player of players){
    console.log(player);
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '20px';
}