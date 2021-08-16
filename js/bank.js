function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputTextVal = parseFloat(inputText);
    inputField.value = ''; 
    return inputTextVal;
}

function fieldTotal(fieldId,inputVal) {
    const  fieldElement = document.getElementById(fieldId);
    const fieldText = fieldElement.innerText;
    const fieldTextVal = parseFloat(fieldText);
    fieldElement.innerText = fieldTextVal + inputVal;
}

function totalBalance(tbalId,inputVal,isadd) {
    const TbalField = document.getElementById(tbalId);
    const TbalFieldText = TbalField.innerText;
    const TbalValue = parseFloat(TbalFieldText);
    
    if(isadd == true){
        TbalField.innerText = TbalValue +  inputVal;
    }else{
        TbalField.innerText = TbalValue -  inputVal;
    }
    }


document.getElementById('deposit-btn').addEventListener('click',function () {
    const depositValue = getInput('deposit-input');
 
 fieldTotal('deposite-amount',depositValue);
 totalBalance('total-bal',depositValue,true);
});


document.getElementById('withdraw-btn').addEventListener('click',function () {
    const withdrawAmount = getInput('withdraw-input');

    fieldTotal('withdraw-amount',withdrawAmount);
    totalBalance('total-bal',withdrawAmount,false);
})



