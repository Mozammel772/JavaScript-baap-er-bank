function myFunction() {
    document.body.style.backgroundColor = 'red';
}
const btn1 = document.getElementById('Btn');
btn1.onclick = btn2;
function btn2 () {
    document.body.style.backgroundColor = 'black';
}

// green-color

const helloGreen = document.getElementById('Green-btn');
        helloGreen.onclick = 'greenFunction';
        function greenFunction () {
            helloGreen.body.style.backgroundColor = 'gold';
        }