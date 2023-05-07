const range = {
    start: new Date("2023-05-03"),
    end: new Date("2023-05-06")
}
nseIndia.getEquityHistoricalData('IRCTC', range).then(data => {
    console.log(data[0].data)
})