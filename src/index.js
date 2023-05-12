import express from "express";
import { getStockByIndices } from "./utils/getStockByIndices.js";
const app = express();
app.use(express.json());
import { NseIndia } from "stock-nse-india"
const nseIndia = new NseIndia();

app.listen('3000', () => {
    console.log("Backend is up at port 3000")
})

app.get('/', async (req, res) => {
    res.send("Hello World")
    const upto10 = await getStockByIndices()
    console.log(upto10)
})