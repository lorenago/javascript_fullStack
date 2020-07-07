const { Schema, model } = require('mongoose');

const EmailSchema = new Schema({
    remitente: { type:String, required: true },
    asunto: { type:String, required: true },
    mensaje: { type:String, required: true }
});

module.exports = model('Email', EmailSchema);
