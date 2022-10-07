function getInputValue (fieldInput){
   const inputField = document.getElementById(fieldInput);
   const valueInText = inputField.value;
   const value = parseFloat(valueInText);
   inputField.value = '';
   return value;
}
function getFieldInputValue (fieldInputs){
    const fieldTag = document.getElementById(fieldInputs);
    const fieldInputText = fieldTag.innerText;
    const value = parseFloat(fieldInputText);
    return value;
}
function updateTotal(fieldInputs , amount) {
    // const totalTag = document.getElementById(fieldInputs);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getFieldInputValue(fieldInputs);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldInputs).innerText = newTotal;
}
function getfieldInputValue (amount , isAdds){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getFieldInputValue('balance-total');
    let newBalance;
    if(isAdds == true) {
         newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    if(amount > 10){
        updateTotal('deposit-total', amount);
        getfieldInputValue(amount, true);
    }
    
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    const balance = getFieldInputValue('balance-total');
   if(amount > 10 && amount <= balance){
    updateTotal('withdraw-total', amount);
    getfieldInputValue(amount, false);
   }
})