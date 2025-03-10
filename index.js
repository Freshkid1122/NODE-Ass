const app = require('express')();

require("dotenv").config();

const PORT = process.env.PORT ||  3000


// Array of objects
const forexData = [
    {
        name: "EUR/USD",
        forexPairs: ["EUR", "USD"],
        exchange: "Forex",
        pictures: ["eur_usd_chart.jpg"]
    },
    {
        name: "GBP/USD",
        forexPairs: ["GBP", "USD"],
        exchange: "Forex",
        pictures: ["gbp_usd_chart.jpg"]
    },
    {
        name: "USD/JPY",
        forexPairs: ["USD", "JPY"],
        exchange: "Forex",
        pictures: ["usd_jpy_chart.jpg"]
    },
    {
        name: "AUD/USD",
        forexPairs: ["AUD", "USD"],
        exchange: "Forex",
        pictures: ["aud_usd_chart.jpg"]
    },
    {
        name: "USD/CAD",
        forexPairs: ["USD", "CAD"],
        exchange: "Forex",
        pictures: ["usd_cad_chart.jpg"]
    },
    {
        name: "USD/CHF",
        forexPairs: ["USD", "CHF"],
        exchange: "Forex",
        pictures: ["usd_chf_chart.jpg"]
    },
    {
        name: "NZD/USD",
        forexPairs: ["NZD", "USD"],
        exchange: "Forex",
        pictures: ["nzd_usd_chart.jpg"]
    },
    {
        name: "EUR/GBP",
        forexPairs: ["EUR", "GBP"],
        exchange: "Forex",
        pictures: ["eur_gbp_chart.jpg"]
    },
    {
        name: "EUR/JPY",
        forexPairs: ["EUR", "JPY"],
        exchange: "Forex",
        pictures: ["eur_jpy_chart.jpg"]
    },
    {
        name: "GBP/JPY",
        forexPairs: ["GBP", "JPY"],
        exchange: "Forex",
        pictures: ["gbp_jpy_chart.jpg"]
    }
];


app.get('/forexData', (req, res) => {
    res.send(forexData)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
