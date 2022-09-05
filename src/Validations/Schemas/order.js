const Joi = require("joi");

const productSchema = Joi.object().keys({
  productId: Joi.number().required(),
  price: Joi.number().required()
})

const  orderSchema = Joi.object().keys({
    total: Joi.number().required(),
    productsList: Joi.array().items(productSchema)

  })



module.exports = orderSchema