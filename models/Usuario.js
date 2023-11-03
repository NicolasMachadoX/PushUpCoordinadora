const {Schema,model} = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioSchema = Schema({
    Nombre : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
    Apellido : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
    Password: {
        type: String,
        require: [true,"The data it's obligatory"] 
    },
    Num_telefono : {
        type: Number,
        require: [true,"The data it's obligatory"]
    },
    Correo_electronico : {
        type: String,
        require: [true,"The data it's obligatory"]
    },
    Cedula : {
        type: Number,
        require: [true,"The data it's obligatory"]
    },
    IdCiudadFk: {
        type: Number,
        require: [true,"The data it's obligatory"]
    }
})

usuarioSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
}

usuarioSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password,this.Password)

}

module.exports = model('usuario', usuarioSchema);