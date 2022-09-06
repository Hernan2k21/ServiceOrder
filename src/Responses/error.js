module.exports = {
    user_not_found:{
        httpCode: 404,
        message: 'User not found'
    },
    invalid_credentials:{
        httpCode: 401,
        message: 'Invalid credentials'
    },
    404: {
        httpCode: 404,
        message: 'Route not found orders service'
    },
    total_missmatch: {
        httpCode: 400,
        message: 'Order total missmatch with products array total'
    }
}