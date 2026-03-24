const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'cursos-app',
    port:'3307'
});

connection.connect(err =>{
    if(err){
        console.error('Error en la conexion a la BD  ', err);
        return;
    }

    console.log('Conectado');
});

module.exports = connection;