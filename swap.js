// Toggle between Market and Limit tabs
document.getElementById('marketTab').addEventListener('click', () => {
    document.getElementById('marketContent').classList.add('active');
    document.getElementById('limitContent').classList.remove('active');
});

document.getElementById('limitTab').addEventListener('click', () => {
    document.getElementById('limitContent').classList.add('active');
    document.getElementById('marketContent').classList.remove('active');
});

// Swap Market Amounts and currencies functionality
function swapMarketAmounts() {
    // Get the input and select elements
    const fromAmount = document.getElementById('marketFromAmount');
    const toAmount = document.getElementById('marketToAmount');
    const fromSelect = document.getElementById('marketFromSelect');
    const toSelect = document.getElementById('marketToSelect');

    // Swap the values of the inputs
    const tempAmount = fromAmount.value;
    fromAmount.value = toAmount.value;
    toAmount.value = tempAmount;

    // Swap the selected currencies
    const tempCurrency = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = tempCurrency;
}


// liquidity
function swapLiquidityTokens() {
    // Get the input and select elements for liquidity
    const tokenAAmount = document.getElementById('liquidityTokenAAmount');
    const tokenBAmount = document.getElementById('liquidityTokenBAmount');
    const tokenASelect = document.getElementById('liquidityTokenASelect');
    const tokenBSelect = document.getElementById('liquidityTokenBSelect');

    // Swap the values of the inputs
    const tempAmount = tokenAAmount.value;
    tokenAAmount.value = tokenBAmount.value;
    tokenBAmount.value = tempAmount;

    // Swap the selected currencies
    const tempCurrency = tokenASelect.value;
    tokenASelect.value = tokenBSelect.value;
    tokenBSelect.value = tempCurrency;
}