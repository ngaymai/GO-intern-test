export function formatMoney(amount) {    
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) {
        throw new Error('Invalid numeric value');
    }
    const roundedAmount = numericAmount.toFixed(2);
    return roundedAmount.toString();
}
