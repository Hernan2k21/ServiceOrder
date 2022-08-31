const orderModel = require('../Database/models').Order
const getAllOrders = async () =>{

    try {
        const orders = await orderModel.findAll()
        return orders
    } catch (e) {
        throw(e)
    }
    
}


module.exports = {getAllOrders}