const axios = require('axios')
const { ServiceCallError } = require('./error')
const productService = require('../../config/app.config').services.product
console.trace(productService)
module.exports = {
    async validateProductList (productList) {
            try {
                const config = {
                    url : "/v1/product/validate-products-list",
                    baseURL: productService.host,
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    data: productList
                }
               
                await axios(config)
            } catch (e) {
                throw  new ServiceCallError(e)
            }
    }
}