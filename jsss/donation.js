document.getElementById('donate-noakhali').addEventListener('click', function(event) {
    event.preventDefault();

    const myBalance = parseFloat(getTextFieldValueById('my-amount'));
    const donationAmount = parseFloat(getTextFieldValueById('balance-noakhali'));
    

    const noakhaliBalanceInput = document.getElementById('donation-amount-noakhali').value;

   

if (noakhaliBalanceInput === "" || isNaN(Number(noakhaliBalanceInput))) {
    alert('Invalid donation amount. Please enter a valid number.');
    return;
}

const noakhaliBalance = parseFloat(noakhaliBalanceInput);



    if (typeof donationAmount === 'number') {
        if (noakhaliBalance > 0 && myBalance >= noakhaliBalance) {
            const updateNoakhaliBalance = donationAmount + noakhaliBalance;
            document.getElementById('balance-noakhali').innerText = updateNoakhaliBalance;

            const updateBalance = myBalance - noakhaliBalance;
            document.getElementById('my-amount').innerText = updateBalance;
            document.getElementById('my_modal_1').showModal();
        } else {
            alert('Insufficient funds or invalid donation amount.');
        }
    }


});


document.getElementById('donate-for-feni').addEventListener('click', function(event) {
    event.preventDefault();

    const myBalanceFeni = parseFloat(getTextFieldValueById('my-amount'));
    const donationAmountFeni = parseFloat(getTextFieldValueById('balance-feni'));
    

    const feniBalanceInput = document.getElementById('donation-amount-feni').value;

   

if (feniBalanceInput === "" || isNaN(Number(feniBalanceInput))) {
    alert('Invalid donation amount. Please enter a valid number.');
    return;
}

const feniBalance = parseFloat(feniBalanceInput);



    if (typeof donationAmountFeni === 'number') {
        if (feniBalance > 0 && myBalanceFeni >= feniBalance) {
            const updateFeniBalance = donationAmount + feniBalance;
            document.getElementById('balance-feni').innerText = updateFeniBalance;

            const updateBalanceX = myBalanceFeni - feniBalance;
            document.getElementById('my-amount').innerText = updateBalanceX;
            document.getElementById('my_modal_1').showModal();
        } else {
            alert('Insufficient funds or invalid donation amount.');
        }
    }


});



document.getElementById('donate-noakhali').addEventListener('click', function(event) {
    event.preventDefault();

    const myBalance = parseFloat(getTextFieldValueById('my-amount'));
    const donationAmount = parseFloat(getTextFieldValueById('balance-noakhali'));
    

    const noakhaliBalanceInput = document.getElementById('donation-amount-noakhali').value;

   

if (noakhaliBalanceInput === "" || isNaN(Number(noakhaliBalanceInput))) {
    alert('Invalid donation amount. Please enter a valid number.');
    return;
}

const noakhaliBalance = parseFloat(noakhaliBalanceInput);



    if (typeof donationAmount === 'number') {
        if (noakhaliBalance > 0 && myBalance >= noakhaliBalance) {
            const updateNoakhaliBalance = donationAmount + noakhaliBalance;
            document.getElementById('balance-noakhali').innerText = updateNoakhaliBalance;

            const updateBalance = myBalance - noakhaliBalance;
            document.getElementById('my-amount').innerText = updateBalance;
            document.getElementById('my_modal_1').showModal();
        } else {
            alert('Insufficient funds or invalid donation amount.');
        }
    }


});





document.getElementById('donation-btn').addEventListener('click',function(){
    showSectionById('donation-Section')
});

document.getElementById('history-btn').addEventListener('click',function(){
    showSectionById('history-section')
});
