import Producto from "../models/producto";

export const crearProducto = async(req, res)=>{
try{
    console.log(req.body)
    //validacion
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
export const borrarProducto = (req, res)=>{
    res.send('Aqui borro un producto')
}
export const editarProducto = (req, res)=>{
    res.send('Aqui edito un producto')
}

// agregar las funciones para borrarProducto

// agregar las funciones para editarProducto