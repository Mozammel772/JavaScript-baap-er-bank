 
 function getInPutValue (inputId){
       const inputValue = document.getElementById(inputId);
       const inputAmount = inputValue.value;
       const inputText = parseFloat (inputAmount);


       //    get clear input
       inputValue.value = '';
       return inputText;
 }
  function updateTotalField( totalFieldId ,amount){
    //   debugger;
    // deposite-totall-add  
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const privaceTotal = parseFloat(totalText);
    
    totalElement.innerText= privaceTotal + amount;
  }
function getCurrentBalance (){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const privaceTotalBalance = parseFloat (totalBalanceText);
    return privaceTotalBalance;
}

  function updateBalance (amount,ifAdd){
    const totalBalance = document.getElementById('total-balance');
    privaceTotalBalance = getCurrentBalance();
    // const totalBalanceText = totalBalance.innerText;
    // const privaceTotalBalance = parseFloat (totalBalanceText);
    if ( ifAdd == true){
        totalBalance.innerText = privaceTotalBalance + amount;
    }
    else {
        totalBalance.innerText = privaceTotalBalance - amount;
    }

  }

document.getElementById('Deposit-button').addEventListener('click',function(){
    // const depositeInput = document.getElementById('Deposit-input');
    // const depositeInputText = depositeInput.value;
    // const depositeInputAmount = parseFloat(depositeInputText);
    // console.log(depositeInputText);
   

    
    // deposite-totall-add  
    // const depositetotal = document.getElementById('Deposite-total');
    // const depositetotalAmount = depositetotal.innerText;
    // const depositetotalAmoun = parseFloat(depositetotalAmount);
   
    // depositetotal.innerText= depositetotalAmoun + depositeInputAmount;
    // console.log(depositetotalAmount);

    //update-balance
    // const totalBalance = document.getElementById('total-balance');
    // const totalBalanceText = totalBalance.innerText;
    // const privaceTotalBalance = parseFloat (totalBalanceText);
    const depositeAmount = getInPutValue ('Deposit-input');
    if ( depositeAmount > 0){
        updateTotalField('Deposite-total' , depositeAmount);
        updateBalance(depositeAmount,true);
    }
    else{
        console.log( alert('Hello Please Correct Amount Input'));
    }
   

    // totalBalance.innerText = privaceTotalBalance + depositeInputAmount;
    
    // reset-depsite
    // depositeInput.value = '';
})

document.getElementById('Withdraw-button').addEventListener('click', function () {

    // withdraw- input
    // const withdrawButton = document.getElementById('Withdraw-input');
    // const withdrawButtonText = withdrawButton.value;
    // const privaceWithdrawButton = parseFloat(withdrawButtonText);
   

    // withdraw-now
    // const withdrawNow = document.getElementById('Withdraw-total');
    // const withdrawNowText = withdrawNow.innerText;
    // const privaceWithdrawNow = parseFloat(withdrawNowText);
    // withdrawNow.innerText = privaceWithdrawNow +  privaceWithdrawButton ;
    
    // withdeaw- add
    // const addWithdra = document.getElementById('total-balance');
    // const addWithdraTotal = addWithdra.innerText;
    // const privaceAddWithdraTotal = parseFloat(addWithdraTotal);
    // addWithdra.innerText = privaceAddWithdraTotal - privaceWithdrawButton ;
    // addWithdra.innerText = addWithdraTotal;
    const withdrawAmount = getInPutValue ('Withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField ( 'Withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
    else{
        console.log(withdrawAmount,'Check Your Balance');
    }
     
    // reset-withdraw
    // withdrawButton.value = '';
})