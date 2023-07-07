import { NseIndia } from "stock-nse-india"

const nseIndia = new NseIndia();

export async function getStockHistory(symbol, range) {
    const Prices = await nseIndia.getEquityHistoricalData(symbol, range).then(data => {
        const closePrices = []

        data[0].data.map(e => {
            closePrices.push(e.CH_CLOSING_PRICE)
        })

        return closePrices
    })

    return Prices
}


