
const {SchemaValidationError, OrderValidationError} = require('../Helpers/error')
const errorResponses = require('../Responses/error')
const  validateSchema = async (data, schema, updating) =>  {
    try{
        const result = await schema.validateAsync(data, {
            context: { updating: updating ? 'true' : 'false' },
          });
        return result
    }catch(e){
        throw new SchemaValidationError(e)
        
    }
}
const validateOrderTotal =  (order) =>{
    const {total, products_list} = order
    let add = 0;
    for (let index = 0; index < products_list.length; index++) {

        const productPrice = products_list[index].price;
        add = add + productPrice
        
    }
    console.trace({total: total, added: add})
    if(total!==add){
        throw new OrderValidationError(errorResponses.total_missmatch)
    }
    return
}
module.exports = {validateSchema, validateOrderTotal}