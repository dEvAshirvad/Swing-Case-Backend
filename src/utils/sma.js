

export function calculateSMA(prices, period) {
    const sma = [];

    for (let i = period; i <= prices.length; i++) {
        let sum = 0;

        for (let j = i - period; j < i; j++) {
            sum += prices[j];
        }

        sma.unshift(sum / period);
    }

    return sma;
}
