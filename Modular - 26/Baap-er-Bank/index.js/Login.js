document.getElementById('user-button').addEventListener ('click', function(){
    //  console.log('This is Button');
     const userGmail = document.getElementById('user-gmail');
       const userMail = userGmail.value;
    //    console.log(userMail);
// //    get passsword
    var userPsw = document.getElementById('user-password');
    var userPasswords = userPsw.value;
    // console.log(userPasswords);
    if (userMail == 'abc@bapper.com' && userPasswords == 'secret') {
        //  console.log('Welcome to Bank');
         window.location.href = 'banking.html';
     }
    else {
        alert('Please Correct Your Password');
    }

})