const joi = require('joi')

const schema = joi.object({
        name : joi.string().min(4).max(50).required().messages({"string.empty" : "name is required"}),
        // lastName: joi.string().min(4).required().messages({"string.empty" : "name is required"}),
        email:joi.string().required().messages({
        'any.required': 'MAIL_REQUIRED',
        'string.empty': 'MAIL_REQUIRED',
        'string.email': 'INVALID_MAIL'       }),
        password:joi.string().required(),
})

module.exports = schema