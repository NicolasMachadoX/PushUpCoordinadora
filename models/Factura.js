const {Schema,model} = require('mongoose');

const facturaSchema = Schema({
    Fecha_compra : {
        type: Date,
        require: [true, "The data it's obligatory"]
    },
    Hora_comprar : {
        type: Number ,
        require: [true,"The data it's obligatory"]
    },
    Valor_total : {
      type: Number ,
      require: [true,"The data it's obligatory"]
    },
    Descuentos : {
        type: Boolean ,
        require: [true,"The data it's obligatory"]
    }
})

module.exports = model('factura', facturaSchema);