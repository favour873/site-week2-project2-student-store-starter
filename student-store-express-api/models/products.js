// 20230621141204
// https://codepath-store-api.herokuapp.com/store
const data = require("../data/db.json")

const getProductById = (id) => {
    return data.products.find((product) => product.id === id)
}
module.exports = {
    data,
    getProductById
}