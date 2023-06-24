const express = require("express")
const app = express()

const cors = require("cors");
const morgan = require("morgan");

const productsRouter = require("./routes/products")

app.use(cors());
app.use(express.json());

app.use("/store", productsRouter)

module.exports = app