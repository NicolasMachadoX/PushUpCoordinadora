const {Schema,model} = require('mongoose');

const envioSchema = Schema({
      Nombre : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
     IdUsuarioFk : {
        type: Number,
        require: [true,"The data it's obligatory"]
    },
    IdVendedorFk : {
        type: Number,
        require: [true,"The data it's obligatory"]
    },
    IdCamionFK : {
        type: Number,
        require: [true,"The data it's obligatory"]
    },
    IdEstadoFk : {
        type: Number,
        require: [true,"The data it's obligatory"]
    }
})

module.exports = model('envio', envioSchema);