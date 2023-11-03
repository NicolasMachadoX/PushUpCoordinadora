const mongoose = require('mongoose');

const conexion = async () =>{
    try {
            await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log('Db connection succesfully');
    } catch (error) {
        console.log(error);
        }
}

module.exports = conexion;