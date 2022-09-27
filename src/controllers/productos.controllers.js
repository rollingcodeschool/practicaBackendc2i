import Producto from "../models/producto";

export const crearProducto = async(req, res)=>{
try{
    console.log(req.body)
    //crear un objeto para guardar en la BD
    const productoNuevo = new Producto({
        nombreProducto: req.body.nombreProducto,
        imagen: req.body.imagen,
        precio: req.body.precio,
        categoria: req.body.categoria
    });
    //guardar efectivamente en la BD
    await productoNuevo.save()
    //enviar respuesta al frontend
    res.status(201).json({
        mensaje: 'El producto fue creado exitosamente'
    })
    //si algo falla tambien enviar una respuesta
}catch(error){
    console.log(error);
    res.status(400).json({
        mensaje: 'El producto enviado no pudo ser creado'
    })
}


}

export const listarProductos = async(req, res)=>{
    try{
        //buscar en la BD la collection de productos
        const listaProductos = await Producto.find();
        //enviar la respuesta 
        res.status(200).json(listaProductos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar los productos'
        })
    }

}
export const obtenerProducto = async (req, res)=>{
    try{
        console.log(req.params.id);
        //buscar en la BD la collection de productos
        const productoBuscado = await Producto.findById(req.params.id);
        //enviar la respuesta 
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar los productos'
        })
    }

}
export const borrarProducto = async(req, res)=>{
   try{
    //buscar un producto por el id en la collection de productos de la BD y luego borrar
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
        mensaje: 'El producto fue eliminado correctamente'
    })
   }catch(error){
    console.log(error);
    res.status(400).json({
        mensaje:'Error al intentar borrar el producto'
    })
   }
}
export const editarProducto = async(req, res)=>{
   try {
    //validacion
    //buscar el producto por el id y luego modificar el producto
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
        mensaje: 'El producto modificado'
    })
} catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje:'Error al intentar borrar el producto'
    })
   }
}
