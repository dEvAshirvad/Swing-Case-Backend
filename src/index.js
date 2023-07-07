import express from "express";
import { getStockByIndices } from "./utils/getStockByIndices.js";
const app = express();
app.use(express.json());
import { NseIndia } from "stock-nse-india"
import { getStockHistory } from "./utils/getStockHistory.js";
import { calculateSMA } from "./utils/sma.js";
import { calculate } from "./utils/calculate.js";
const nseIndia = new NseIndia();

app.listen('3000', () => {
    console.log("Backend is up at port 3000")
})

app.get('/', async (req, res) => {
    const upto10 = await getStockByIndices()
    const start = new Date(upto10[0].lastDay)
    let end = start.getDate() - 63
    end = new Date().setDate(end)
    end = new Date(end)
    console.log(upto10)

    const range = {
        start: end,
        end: start
    }

    console.log(range)

    const stocks = [];

    for (let i = 0; i < upto10.length; i++) {
        const result = await calculate(upto10[i], range)
        stocks.push(result)
    }

    res.json({ stocklist: stocks })

})