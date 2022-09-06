const orderModel = require('../Database/models').Order

const getAllOrders = async () =>{

    try {
        const orders = await orderModel.findAll()
        return orders
    } catch (e) {
        throw(e)
    }
    
}

const createOrder = async (orderData) =>{

    try {
        const order = await orderModel.create(orderData)
        return order
    } catch (e) {
        throw(e)
    }
    
}



module.exports = {getAllOrders, createOrder}