const prices = [10, 12, 13, 14, 15, 16, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const sma21 = calculateSMA(prices, 21);

function calculateSMA(prices, period) {
    const sma = [];
    console.log(prices.length)

    for (let i = period; i <= prices.length; i++) {
        let sum = 0;

        for (let j = i - period; j < i; j++) {
            sum += prices[j];
        }

        sma.push(sum / period);
    }

    return sma;
}

console.log('Prices:', prices);
console.log('21-day SMA:', sma21);

const lastPrice = prices[prices.length - 1];
const lastSMA = sma21[sma21.length - 1];

console.log('Last price:', lastPrice);
console.log('Last 21-day SMA:', lastSMA);

if (lastPrice > lastSMA) {
    console.log('Bullish crossover');
} else if (lastPrice < lastSMA) {
    console.log('Bearish crossover');
} else {
    console.log('No crossover');
}
