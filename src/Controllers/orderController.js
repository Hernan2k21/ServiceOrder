
const {getAllOrders, createOrder}= require('../Actions/order')
const {validateSchema, validateOrderTotal} = require('../Validations')
const {validateProductList} = require('../Helpers/productService')
const orderSchema = require('../Validations/Schemas/order')
module.exports = {
	async getAllOrders(req, res, next) {
        try { 
            const data = await getAllOrders()
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	},
    async postOrder(req, res, next) {
        try { 
            const orderData = await validateSchema(req.body, orderSchema)
            validateOrderTotal(req.body)
            await validateProductList(req.body)
            const data = await createOrder(orderData)
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	}
		
		
}
