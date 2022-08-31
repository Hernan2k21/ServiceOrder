
const {getAllOrders}= require('../Actions/order')

module.exports = {
	async getAllOrders(req, res, next) {
        try { 
            const data = await getAllOrders()
			res.status(200).json(data)
            
        }catch(e){

            next(e)
        }
	}
		
}
