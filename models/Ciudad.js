const {Schema,model} = require('mongoose');

const ciudadSchema = Schema({
    Nombre : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
      IdPaisFk: {
        type: Number,
        require: [true,"The data it's obligatory"]
    }
})

module.exports = model('ciudad', ciudadSchema);