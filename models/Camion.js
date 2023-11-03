const {Schema,model} = require('mongoose');

const camionSchema = Schema({
      Conductor : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
     Placa : {
        type: Number ,
        require: [true,"The data it's obligatory"]
    }
})

module.exports = model('camion', camionSchema);