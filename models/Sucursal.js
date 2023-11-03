const {Schema,model} = require('mongoose');

const sucursalSchema = Schema({
    Nombre : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
      IdCodigoEnvioFk: {
        type: Number,
        require: [true,"The data it's obligatory"]
    }
})

module.exports = model('sucursal', sucursalSchema);