// Liquidity Logic
const liquidityFromAmount = document.getElementById('liquidityFromAmount');
const liquidityToAmount = document.getElementById('liquidityToAmount');
const liquidityFromSelect = document.getElementById('liquidityFromSelect');
const liquidityToSelect = document.getElementById('liquidityToSelect');
const poolDetails = document.getElementById('poolDetails');
const avaxPerFtm = document.getElementById('avaxPerFtm');
const ftmPerAvax = document.getElementById('ftmPerAvax');
const poolShare = document.getElementById('poolShare');
const submitLiquidity = document.getElementById('submitLiquidity');

// Dummy update logic for liquidity calculations
function updateLiquidity() {
    const fromAmount = parseFloat(liquidityFromAmount.value) || 0;
    const toAmount = parseFloat(liquidityToAmount.value) || 0;

    // Example calculations (replace with actual logic)
    const avaxRate = fromAmount * 0.157275;
    const ftmRate = toAmount * 6.35827;
    const share = ((fromAmount + toAmount) / 100).toFixed(2);

    avaxPerFtm.textContent = avaxRate.toFixed(6);
    ftmPerAvax.textContent = ftmRate.toFixed(6);
    poolShare.textContent = `${share}%`;

    if (fromAmount > 0 && toAmount > 0) {
        poolDetails.classList.remove('hidden');
    } else {
        poolDetails.classList.add('hidden');
    }
}

// Submit button logic
submitLiquidity.addEventListener('click', () => {
    const fromAmount = parseFloat(liquidityFromAmount.value) || 0;
    const toAmount = parseFloat(liquidityToAmount.value) || 0;

    if (fromAmount > 0 && toAmount > 0) {
        alert(`Liquidity added successfully!\nFrom: ${fromAmount} ${liquidityFromSelect.value}\nTo: ${toAmount} ${liquidityToSelect.value}`);
    } else {
        alert('Please enter valid amounts for both inputs.');
    }
});



function switchTab(tab) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    tabButtons.forEach(button => {
        button.classList.remove('tab-active');
    });

    document.getElementById(tab).classList.add('active');
    document.querySelector(`button[onclick="switchTab('${tab}')"]`).classList.add('tab-active');
}


// JavaScript to handle percentage button click functionality
function updateInputAmount(percentage, liquidityAmountId) {
    const liquidityAmount = document.getElementById(liquidityAmountId);
    const totalAmount = parseFloat(liquidityAmount.getAttribute('data-total')); // Total liquidity value
    if (!isNaN(totalAmount)) {
        const amountToFill = (percentage / 100) * totalAmount;
        liquidityAmount.value = amountToFill.toFixed(2); // Update the input field with the percentage amount
    }
}