// document.getElementById('donate-noakhali').addEventListener('click', function(event) {
//     event.preventDefault();

//     const myBalance = parseFloat(document.getElementById('my-amount').innerText);
//     const donationAmount = parseFloat(document.getElementById('balance-noakhali').innerText);
//     const noakhaliBalanceInput = document.getElementById('donation-amount-noakhali').value;

   

// if (noakhaliBalanceInput === "" || isNaN(Number(noakhaliBalanceInput))) {
//     alert('Invalid donation amount. Please enter a valid number.');
//     return;
// }

// const noakhaliBalance = parseFloat(noakhaliBalanceInput);



//     if (typeof donationAmount === 'number') {
//         if (noakhaliBalance > 0 && myBalance >= noakhaliBalance) {
//             const updateNoakhaliBalance = donationAmount + noakhaliBalance;
//             document.getElementById('balance-noakhali').innerText = updateNoakhaliBalance;

//             const updateBalance = myBalance - noakhaliBalance;
//             document.getElementById('my-amount').innerText = updateBalance;
//             document.getElementById('my_modal_1').showModal();
//         } else {
//             alert('Insufficient funds or invalid donation amount.');
//         }
//     }


// });


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
