function getInputValue(fieldInput){
   const inputValue = document.getElementById(fieldInput);
   const inputText = inputValue.value;
   const value = parseFloat(inputText);
   inputValue.value = '';
   return value;
}
function getfieldInputValue(fieldInputs){
    const balanceValue = document.getElementById(fieldInputs);
    const balanceText = balanceValue.innerText;
    const value = parseFloat(balanceText);
    return value;
    // const previousBalance = value + amount;
    // balanceValue.innerText = previousBalance;

}

function getDepositTotal(fieldInputs, amount){
    // const depositValue = document.getElementById(fieldInputs);
    // const depositText = depositValue.innerText;
    // const value = parseFloat(depositText);
    const value = getfieldInputValue(fieldInputs);
    const previousTotal = value + amount;
    document.getElementById(fieldInputs).innerText = previousTotal;
}
function getFieldInputValue (amount , isAdds){
    const value = getfieldInputValue('total-balance');
    let balance;
    if(isAdds == true) {
        balance = value + amount;
    }
    else{
        balance = value - amount;
    }
    document.getElementById('total-balance').innerText = balance;
}
// function updateBalances(fieldInputs, amount){
//     const balanceValue = document.getElementById(fieldInputs);
//     const balanceText = balanceValue.innerText;
//     const value = parseFloat(balanceText);
//     const previousBalance = value - amount;
//     balanceValue.innerText = previousBalance;

// }

document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    getDepositTotal ('deposit-total',amount);
    getfieldInputValue ('total-balance',true);
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    getDepositTotal('withdraw-total',amount);
    getfieldInputValue('total-balance', false);
})