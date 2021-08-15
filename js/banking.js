document.getElementById('deposit-btn').addEventListener('click',function () {
    const depositinputField = document.getElementById('deposit-input');
    const depositInputText = depositinputField.value;
    const depositInputTextParse = parseFloat(depositInputText);

    const totalDepositField = document.getElementById('deposite-amount');
    const depositAmountText = totalDepositField.innerText;

    const depositAmountParse = parseFloat(depositAmountText);

    const Total = depositAmountParse + depositInputTextParse;
    totalDepositField.innerText = Total

    // calculatin total 
    const totalBalField = document.getElementById('total-bal');
    const totalBalText = totalBalField.innerText;
    const totalBalTextParse = parseFloat(totalBalText);

    totalBalField.innerText = depositInputTextParse + totalBalTextParse;
// clear 
   depositinputField.value = ''
})

// withdraw
document.getElementById('withdraw-btn').addEventListener('click',()=>{
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawFieldText = withdrawField.innerText;
    const withdrawFieldTextParse = parseFloat(withdrawFieldText);

    withdrawField.innerText = withdrawAmount + withdrawFieldTextParse;

    // total 
    const total = document.getElementById('total-bal');
    const totalText = total.innerText;
    const totalTextparse = parseFloat(totalText);
    total.innerText = totalTextparse - withdrawAmount;

    // clear 
    withdrawInput.value = '';
})