import { getStockHistory } from "./getStockHistory.js";
import { calculateSMA } from "./sma.js";

export async function calculate(stock, range) {
    const prices = await getStockHistory(stock.symbol, range)
    const sma21 = calculateSMA(prices, 21)
    const lastPrice = prices[0];
    const lastSMA = sma21[0];


    if (lastPrice > lastSMA) {
        return { symbol: stock.symbol, behaviour: 'Bullish crossover' }
    } else if (lastPrice < lastSMA) {
        return { symbol: stock.symbol, behaviour: 'Bearish crossover' }
    } else {
        return { symbol: stock.symbol, behaviour: 'No crossover' }
    }
}