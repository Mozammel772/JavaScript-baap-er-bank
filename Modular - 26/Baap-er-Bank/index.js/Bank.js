document.getElementById('Deposit-button').addEventListener('click', function(){
    // console.log('hello');
    // Deposite-Now
    const DepositeFiles = document.getElementById('Deposit-input');
    const totalDeposite = DepositeFiles.value;
    const newDepositeAmont = parseFloat(totalDeposite);
    // console.log(totalDeposite);
    // total-Deposite
    const DepositTotal = document.getElementById('Deposite-total');
     const privaseDepositAmount = DepositTotal.innerHTML;
    //  const newDepositeTotal = privaseDepositAmount + totalDeposite;
    const privaseDeposit = parseFloat(privaseDepositAmount);
    const newDepositeTotal = newDepositeAmont + privaseDeposit;

    DepositTotal.innerHTML = newDepositeTotal;

    // balance add money
   const BalanceTotal = document.getElementById('total-balance');
   const BalanceTotalText = BalanceTotal.innerHTML;
   const privaseBalanceTotal = parseFloat(BalanceTotalText);
   const newBalanceTotal = privaseBalanceTotal + newDepositeAmont;
   BalanceTotal.innerHTML = newBalanceTotal;

    
//    Deposite input value
     DepositeFiles.value = '';
})

// let me withdraw now

document.getElementById('Withdraw-button').addEventListener('click', function(){
     // console.log('Hello World');
     // Get Withdraw Input
     const withdrawInput = document.getElementById('Withdraw-input');
     const withdrawAmonueText = withdrawInput.value;
     const withdrawAmonueTotal = parseFloat(withdrawAmonueText);
      console.log(withdrawAmonueTotal);
     // get withdraw add

     const withdrawTotal = document.getElementById('Withdraw-total');
     const privaceWithdrawText = withdrawTotal.innerText;
     const privaceWithdrawTotal = parseFloat(privaceWithdrawText);

     const newWithdrawTotal = privaceWithdrawTotal + withdrawAmonueTotal;
     withdrawTotal.innerText = newWithdrawTotal;

     // Total-Balance

     const totalBalance = document.getElementById('total-balance');
     const totalBalanceText = totalBalance.innerText;
     const totalBalanceAmonut = parseFloat(totalBalanceText);
     const myTotalBalance = totalBalanceAmonut - newWithdrawTotal;
     totalBalance.innerText = myTotalBalance;

     withdrawInput.value = '';

})