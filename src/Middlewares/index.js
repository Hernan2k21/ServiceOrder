const errorResponses = require('../Responses/error')
const logError = (e, req, res, next) => {
  console.log( `Error ${e}`) 
  console.log(e.stack)
  next(e)
}

const sendError = (e, req, res, next) => {
  res.header("Content-Type", 'application/json')
  const status = e.httpCode || 500
  delete e.httpCode
  res.status(status).json(e)
}

const notFound = (req, res, next) => {
  res.status(errorResponses[404].httpCode)
  res.json({message: errorResponses[404].message})
}


module.exports = {logError,sendError, notFound}