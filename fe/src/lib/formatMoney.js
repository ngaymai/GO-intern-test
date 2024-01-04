export function formatMoney(price) {
    const tmp = parseFloat(price).toFixed(2);
    return tmp.toString();
}
