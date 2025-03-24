const Joi = require('joi');

exports.carValidation = (data) => {

    const schema = Joi.object({
        brand: Joi.string().min(2).max(50).required().messages({
            'string.empty': 'La marca no puede estar vacía',
            'string.min': 'La marca debe tener al menos 2 caracteres',
            'string.max': 'La marca no puede tener más de 50 caracteres',
            'any.required': 'La marca es obligatoria'
        }),
        model: Joi.string().min(1).max(50).required().messages({
            'string.empty': 'El modelo no puede estar vacío',
            'string.min': 'El modelo debe tener al menos 1 carácter',
            'string.max': 'El modelo no puede tener más de 50 caracteres',
            'any.required': 'El modelo es obligatorio'
        }),
        year: Joi.number().integer().min(1886).max(new Date().getFullYear()).required().messages({
            'number.base': 'El año debe ser un número entero',
            'number.min': 'El año no puede ser menor a 1886',
            'number.max': `El año no puede ser mayor a ${new Date().getFullYear()}`,
            'any.required': 'El año es obligatorio'
        }),
        patent: Joi.string().min(1).max(10).required().messages({
            'string.empty': 'La Patente no puede estar vacío',
            'string.min': 'La Patente debe tener al menos 1 carácter',
            'string.max': 'La Patnte no puede tener más de 10 caracteres',
            'any.required': 'La Patente es obligatoria'
        }),
        basePrice: Joi.number().precision(2).min(0).required().messages({
            'number.base': 'El precio base debe ser un número',
            'number.min': 'El precio base no puede ser negativo',
            'number.precision': 'El precio base solo puede tener hasta 2 decimales',
            'any.required': 'El precio base es obligatorio'
        }),
        statusName: Joi.string().required().messages({
            'string.empty': 'El nombre del status no puede estar vacío',
            'any.required': 'El nombre del status es obligatorio'
        }),
        branchName: Joi.string().required().messages({
            'string.empty': 'El nombre de la Concecionaria no puede estar vacío',
            'any.required': 'El nombre de la Concesionaria es obligatoria'
        }),
       
    }).unknown(true); 

    return schema.validate(data, { abortEarly: false });

}
