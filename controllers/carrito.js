const carrito = require('../models/carrito')

const controladorCarrito = {

    obtenerCarrito: async (req,res) =>{








        try{ carrito = await carrito.find({userId})

            
        }catch (err) {

            error=err
            console.log(error)
        }





    },
    agregarProducto: async (req,res) =>{








        try{ carrito = await carrito.find({userId})

            
        }catch (err) {

            error=err
            console.log(error)
        }





    },
    quitarProducto: async (req,res) =>{








        try{ carrito = await carrito.find({userId})

            
        }catch (err) {

            error=err
            console.log(error)
        }





    },
    agregarUnProducto: async (req,res) =>{








        try{ carrito = await carrito.find({userId})

            
        }catch (err) {

            error=err
            console.log(error)
        }





    },
    quitarUnProducto: async (req,res) =>{

        const idProduct  = req.params.id

        try{ carrito = await carrito.findOneAndDelete({_id:idProducto})
        if (carrito) {
            res.status(200).json({
                id:carrito._id,
                success:True,
                message: "Producto eliminado"
            })
             } else{
                res.status(404).json ({
                    success:false,
                    message:"objeto no encontrado"
                })
            }
        
        }catch (err) {
            res.status(400).json({
                
                succes:false,
                message: error.message
            })
            }





    }
    




}