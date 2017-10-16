var Joi = require('joi');

const paramValidation = {

  updatePost: {
    body: {
      _id: Joi.string().required(),
      likes: Joi.number().required()
    }
  }

};

module.exports = paramValidation;