import { NseIndia } from "stock-nse-india"

const nseIndia = new NseIndia();

export async function getStockDetail() {
    const detail = await nseIndia.getEquityDetails('IRCTC').then(details => {
        return {
            symbol: details.info.symbol,
            companyName: details.info.companyName,
            weekHighLow: details.priceInfo
        }
    })

    return detail
}