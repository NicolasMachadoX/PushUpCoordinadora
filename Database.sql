CREATE DATABASE coordinadoraDB;

use coordinadoraDB;

CREATE TABLE Pais(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL
);

CREATE TABLE Ciudad(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL,
    IdPaisFk INT NOT NULL,
    Foreign Key (IdPaisFk) REFERENCES Pais(id)
);

CREATE TABLE Sucursal(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL,
    IdCiudadFk INT NOT NULL,
    Foreign Key (IdCiudadFk) REFERENCES Ciudad(id)
);

CREATE TABLE Usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL,
    Apellido VARCHAR(80) NOT NULL,
    Cedula INT NOT NULL,
    Num_telefono INT NOT NULL,
    Correo_electronico VARCHAR(255),
    IdCiudadFk INT NOT NULL,
    Foreign Key (IdCiudadFk) REFERENCES Ciudad(id)
);

CREATE TABLE Estado(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Descripcion VARCHAR(255),
    IdSucursalFk INT NOT NULL,
    Foreign Key (IdSucursalFk) REFERENCES Sucursal(id)
);

CREATE TABLE Camion(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Conductor VARCHAR(80) NOT NULL,
    Placa INT NOT NULL
);

CREATE TABLE Envio(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL,
    IdUsuarioFk INT NOT NULL,
    IdVendedorFk INT NOT NULL,
    IdCamionFk INT NOT NULL,
    IdEstadoFk INT NOT NULL,
    Foreign Key (IdUsuarioFk) REFERENCES Usuario(id),
    Foreign Key (IdVendedorFk) REFERENCES Vendedor(id),
    Foreign Key (IdCamionFk) REFERENCES Camion(id),
    Foreign Key (IdEstadoFk) REFERENCES Estado(id)
);

CREATE TABLE Paquete(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL,
    IdCodigoEnvioFk INT NOT NULL,
    IdFacturaFK INT NOT NULL,
    Foreign Key (IdCodigoEnvioFk) REFERENCES Envio(id),
    Foreign Key (IdFacturaFK) REFERENCES Factura(id)
        

);

CREATE TABLE Factura(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Fecha_compra DATE NOT NULL,
    Hora_compra VARCHAR(50) NOT NULL,
    Valor_total INT NOT NULL,
    Descuentos BOOLEAN NOT NULL
);

CREATE TABLE Vendedor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(80) NOT NULL,
    IdCiudadFk INT NOT NULL,
    Foreign Key (IdCiudadFk) REFERENCES Ciudad(id)
);
