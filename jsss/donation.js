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

            // Ensure a valid donation for history
            if (!isNaN(noakhaliBalance) && noakhaliBalance > 0) {
                // Get the current date and time
                const now = new Date();
                const currentTime = now.toLocaleString();  // Example: "9/25/2024, 4:30:09 PM"

                // Create a new div for donation history
                const div = document.createElement('div');
                div.classList.add('w-1/2', 'h-1/2', 'bg-gray-100', 'p-4', 'align-items', 'mt-2', 'border', 'rounded');
                
                // Add the donation amount and real-time timestamp
                div.innerHTML = `
                    <p>${noakhaliBalance} Taka has been donated for Flood Relief in Noakhali, Bangladesh.</p>
                    <p>Donation Time: ${currentTime}</p>  <!-- Adding real-time here -->
                `;

                // Append the div to the history section
                const historySection = document.getElementById('history-section');
                if (historySection) {  
                    historySection.appendChild(div);
                } else {
                    console.error('History section not found!');
                }
            } else {
                alert('Invalid donation amount for Noakhali.');
            }
        } else {
            alert('Insufficient funds or invalid donation amount.');
        }
    }
});



document.getElementById('donate-for-feni').addEventListener('click', function(event) {
    event.preventDefault();

    const myBalanceForFeni=parseFloat(getTextFieldValueById('my-amount'));
    const donationAmountFeni=parseFloat(getTextFieldValueById('balance-feni'));
    const feniBalanceInput=document.getElementById('donation-amount-feni').value;

    if (feniBalanceInput === "" || isNaN(Number(feniBalanceInput))) {
        alert('Invalid donation amount. Please enter a valid number.');
        return;
    }

    const feniBalance=parseFloat(feniBalanceInput);

    if(typeof donationAmountFeni==='number'){
        if(feniBalance>0 && myBalanceForFeni>=feniBalance){
            const updateFeniBalance=donationAmountFeni+feniBalance;
            document.getElementById('balance-feni').innerText=updateFeniBalance;

            updateNbal=myBalanceForFeni-feniBalance;
            document.getElementById('my-amount').innerText=updateNbal;
            document.getElementById('my_modal_1').showModal();

            if (!isNaN(feniBalance) && feniBalance > 0) {
                
                const now = new Date();

    
               const currentTime = now.toLocaleString();

                const div = document.createElement('div');
                div.classList.add('w-1/2', 'h-1/2', 'bg-gray-100', 'p-4','aligns-items' ,'mt-2', 'border', 'rounded');
                div.innerHTML = `<p>${feniBalance} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
                                  <p>Donation Time: ${currentTime}</p>`;
            
                const historySection = document.getElementById('history-section');
            
                if (historySection) {  // Ensure the history section exists
                    historySection.appendChild(div);
                } else {
                    console.error('History section not found!');
                }
            } else {
                alert('Invalid donation amount for Noakhali.');
            }


        }else {
            alert('Insufficient funds or invalid donation amount.');
        }
    }




});






document.getElementById('click-for-donationQouta').addEventListener('click', function(event) {
    event.preventDefault();

    const myQuotaFunds = parseFloat(getTextFieldValueById('my-amount'));
    const quotaCurrentBalance = parseFloat(getTextFieldValueById('balance-qouta'));
    const quotaDonationInput = document.getElementById('donation-for-qouta').value;

    if (quotaDonationInput === "" || isNaN(Number(quotaDonationInput))) {
        alert('Invalid donation amount. Please enter a valid number.');
        return;
    }

    const donationForQuota = parseFloat(quotaDonationInput);

    if (typeof quotaCurrentBalance === 'number') {
        if (donationForQuota > 0 && myQuotaFunds >= donationForQuota) {
            const updatedQuotaBalance = quotaCurrentBalance + donationForQuota;
            document.getElementById('balance-qouta').innerText = updatedQuotaBalance;

            const remainingQuotaFunds = myQuotaFunds - donationForQuota;
            document.getElementById('my-amount').innerText = remainingQuotaFunds;
            document.getElementById('my_modal_1').showModal(); 

            // Ensure a valid donation for history
            if (!isNaN(donationForQuota) && donationForQuota > 0) {
                // Get the current date and time
                const now = new Date();
                const currentTime = now.toLocaleString();  // Formats the time as "9/25/2024, 4:28:09 PM"

                // Create a new div for donation history
                const div = document.createElement('div');
                div.classList.add('w-1/2', 'h-1/2', 'bg-gray-100', 'p-4', 'align-items', 'mt-2', 'border', 'rounded');
                
                // Set the innerHTML with donation amount and real-time timestamp
                div.innerHTML = `
                    <p>${donationForQuota} Taka has been donated for Quota Relief.</p>
                    <p>Donation Time: ${currentTime}</p>  <!-- Add the real-time here -->
                `;

                // Append the div to the history section
                const historySection = document.getElementById('history-section');
                if (historySection) {  
                    historySection.appendChild(div);
                } else {
                    console.error('History section not found!');
                }
            } else {
                alert('Invalid donation amount.');
            }
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
