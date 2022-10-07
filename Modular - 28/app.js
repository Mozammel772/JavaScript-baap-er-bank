function updateProductNumber (product,price,isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1 ;
    }
   else if(productNumber > 0){
    productNumber = parseInt(productNumber) - 1;
   }
   // update Event
    productInput.value = productNumber;
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;

 // calculator total
 calculatorTotal();
}
function getInputValue(phone){
    const phoneInput = document.getElementById(phone +'-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function calculatorTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10 ;
    const totalPrice = subTotal - tax;
    //  update to HTML
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tax-amount').innerText = tax;
document.getElementById('total-price').innerText = totalPrice;

}





// update phone increase Event

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219, true);
})
document.getElementById('phone-mines').addEventListener('click', function(){
    updateProductNumber('phone',1219,false);
})
// update case increase Event

document.getElementById('case-plus').addEventListener('click', function(){
//   const caseInput = document.getElementById('case-number');
//   const caseNumber = caseInput.value;
//   caseInput.value = parseInt(caseNumber) + 1 ;
updateProductNumber('case',59,true);
})
document.getElementById('case-mines').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateProductNumber('case',59,false);
})


