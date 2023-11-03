const {Schema,model} = require('mongoose');

const paisSchema = Schema({
    Nombre : {
        type: String,
        require: [true,"The data it's obligatory"]
    }
});

module.exports = model('pais', paisSchema);