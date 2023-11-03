const {Schema,model} = require('mongoose');

const vendedorSchema = Schema({
    Nombre : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
    IdCiudadFk: {
        type: Number,
        require: [true,"The data it's obligatory"]
    }
});

module.exports = model('vendedor', vendedorSchema);