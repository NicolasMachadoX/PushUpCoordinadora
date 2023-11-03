const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dbConnexion = require('../database/config');

class Server{

    constructor(){
         this.app = express();
         this.port = proces.env.PORT;

         this.paths = {
            
            camion: '/api/camion',
            ciudad: '/api/ciudad',
            envio: '/api/envio',
            estado: '/api/estado',
            factura: '/api/factura',
            pais: '/api/pais',
            paquete: '/api/paquete',
            sucursal:'/api/sucursal',
            vendedor: '/api/vendedor'
         }

         this.middlewares();

         this.ConexionDB();

    }

    async ConexionDB(){
        await dbConnexion();
    }

    routes(){

    }

    middlewares(){
        this.app.use(this.app.morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server it's running in port: ${this.port}`);

    });

}



}

module.exports = Server;