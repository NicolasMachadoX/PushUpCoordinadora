const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dbConnexion = require('../database/config');

class Server{

    constructor(){
         this.app = express();
         this.port = process.env.PORT;

         this.paths = {
            camion: '/api/camion',
            ciudad: '/api/ciudad',
            envio: '/api/envio',
            estado: '/api/estado',
            factura: '/api/factura',
            pais: '/api/pais',
            paquete: '/api/paquete',
            sucursal:'/api/sucursal',
            vendedor: '/api/vendedor',
            usuario: '/api/usuario'
         }
         this.middlewares();

         this.routes();

         this.ConexionDB();

    }

    async ConexionDB(){
        await dbConnexion();
    }

    routes(){
        this.app.use(this.paths.camion, require('../routes/camion.routes'));
        this.app.use(this.paths.ciudad, require('../routes/ciudad.routes'));
        this.app.use(this.paths.envio, require('../routes/envio.routes'));
        this.app.use(this.paths.estado, require('../routes/estado.routes'));
        this.app.use(this.paths.factura, require('../routes/factura.routes'));
        this.app.use(this.paths.pais, require('../routes/pais.routes'));
        this.app.use(this.paths.paquete, require('../routes/paquete.routes'));
        this.app.use(this.paths.sucursal, require('../routes/sucursal.routes'));
        this.app.use(this.paths.vendedor, require('../routes/vendedor.routes'));
        this.app.use(this.paths.usuario, require('../routes/usuario.routes'));
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(morgan('dev'));
       
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server it's running in port: ${this.port}`);

    });

}



}

module.exports = Server;