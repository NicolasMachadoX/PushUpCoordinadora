const {Schema,model} = require('mongoose');

const estadoSchema = Schema({
      Descripcion : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
      IdSucursalFK : {
        type: Number,
        require: [true,"The data it's obligatory"]
    }
})

module.exports = model('estado', estadoSchema);