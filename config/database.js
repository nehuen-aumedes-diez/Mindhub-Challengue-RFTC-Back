const mongoose = require('mongoose')

let connection = async() => {
    try {
        mongoose.connect(
            //link de conexion a base de datos
            process.env.LINK_DB,
            //objeto con configuraciones de conexiones
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        )
        console.log('Conectado con la base de datos!');
    } catch (error){
        console.log(error.message)
    }
}

connection()