// // Deposite-Button Set
// document.getElementById('Deposit-button').addEventListener('click',function (){
//     // console.log('Hello');

//     // deposite-input set
//     const depositeInput = document.getElementById('Deposit-input');
//     const depositAmount = depositeInput.value;
//     const depositAmountTotal = parseFloat.depositAmount;
//     // console.log(depositAmount);

//     // set dedposite-total
//     const totalDeposite = document.getElementById('Deposite-total');
//     const totalDepositeNow = totalDeposite.innerText;
//     const totalDepositeTextTotal = parseFloat.totalDepositeNow;
//     // console.log('Hello World');
//     totalDeposite.innerText = depositAmount;
//      const total = depositAmountTotal + totalDepositeTextTotal;
//     //  console.log(total);
//     // console.log(totalDepositeText);

//     //  clear-depositeInput
//     depositeInput.value = '';
// })

// deposite button set
document.getElementById('Deposit-button').addEventListener('click',function(){
    const depositeInput = document.getElementById('Deposit-input');
    const depositeInputText = depositeInput.value;
    const depositeInputAmount = parseFloat(depositeInputText);
    // console.log(depositeInputText);
    // deposite-totall-add  
    const depositetotal = document.getElementById('Deposite-total');
    const depositetotalAmount = depositetotal.innerText;
    const depositetotalAmoun = parseFloat(depositetotalAmount);
    
    depositetotal.innerText= depositetotalAmoun + depositeInputAmount;
    // console.log(depositetotalAmount);

    //update-balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const privaceTotalBalance = parseFloat (totalBalanceText);


    totalBalance.innerText = privaceTotalBalance + depositeInputAmount;
    
    // reset-depsite
    depositeInput.value = '';
})

document.getElementById('Withdraw-button').addEventListener('click', function () {

    // withdraw- input
    const withdrawButton = document.getElementById('Withdraw-input');
    const withdrawButtonText = withdrawButton.value;
    const privaceWithdrawButton = parseFloat(withdrawButtonText);

    // withdraw-now
    const withdrawNow = document.getElementById('Withdraw-total');
    const withdrawNowText = withdrawNow.innerText;
    const privaceWithdrawNow = parseFloat(withdrawNowText);
    withdrawNow.innerText = privaceWithdrawNow +  privaceWithdrawButton ;

    // withdeaw- add
    const addWithdra = document.getElementById('total-balance');
    const addWithdraTotal = addWithdra.value;
    const privaceAddWithdraTotal = parseFloat(addWithdraTotal);
    addWithdra.innerText = privaceAddWithdraTotal - privaceWithdrawNow ;
    // addWithdra.innerText = addWithdraTotal;

    // reset-withdraw
    withdrawButton.value = '';
})