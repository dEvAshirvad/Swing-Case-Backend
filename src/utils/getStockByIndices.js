// nseIndia.getEquityStockIndices('NIFTY 50').then(data => {
//     data.data.map(e => stock.push({ sym: e.symbol, close: e.previousClose }))
//     console.log(stock)
// })

import { NseIndia } from "stock-nse-india"
const nseIndia = new NseIndia();

export async function getStockByIndices(indices = "NIFTY 50") {
    let stockList = await nseIndia.getEquityStockIndices(indices)
    const upto10 = []
    for (let index = 1; index < 11; index++) {
        upto10.push({
            symbol: stockList.data[index].symbol,
            close: stockList.data[index].previousClose
        })
    }

    return upto10
}