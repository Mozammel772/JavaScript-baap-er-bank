function getpin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else {
        // console.log('got 3 digit not approval', pin);
        return getpin();
    }
}

function generatePin() {
    // const pin = Math.round(Math.random() * 10000);
    const pin = getpin();
    document.getElementById('display-pin').value = pin;
    // console.log(pin);
}
document.getElementById('key-pad').addEventListener('click',function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN (number)) {
       if( number == 'C'){
          calcInput.value = '';
       }
    }
    else{
     
      const previousNumber = calcInput.value;
      const newNumber = previousNumber + number;
      calcInput.value = newNumber;
    } 
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const nofitySurces = document.getElementById('notify-suscess');
    const notifyFail = document.getElementById('notify-fail');
    if( pin == typedNumbers){       
        nofitySurces.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else{       
        notifyFail.style.display = 'block';
        nofitySurces.style.display = 'none';
    }
}
// document.getElementById('key-pad').addEventListener('click',function (event) {
//     const number = event.target.innerText;
//     const calcInput = document.getElementById('typed-numbers');
//     const previousNumber = calcInput.value;
//     const newNumber = previousNumber + number;
//     calcInput.value = newNumber;
// })