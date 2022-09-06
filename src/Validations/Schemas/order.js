const Joi = require("joi");

const productSchema = Joi.object().keys({
  productId: Joi.string().min(24).max(24),
  price: Joi.number().required(),
  quantity: Joi.number().required()
})

const  orderSchema = Joi.object().keys({
    total: Joi.number().required(),
    products_list: Joi.array().items(productSchema)

  })



module.exports = orderSchema