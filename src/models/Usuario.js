const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Usuarios = new Schema({
    nome:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('usuarios',Usuarios)