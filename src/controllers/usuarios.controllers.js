import Usuario from '../models/usuario'

export const login = (req, res)=>{
    res.send('usuario logueado...')
}

export const crearUsuario = async(req,res)=>{
    try{
        const {nombre, email, password} = req.body

        //verificar si el email ya existe
        let usuario = await Usuario.findOne({email});//devulve un null
        if(usuario){
            //si el usuario existe
            return res.status(400).json({
                mensaje: 'ya existe un usuario con el correo enviado'
            })
        }

        //encriptar la contraseña
        //generar el token
        //guardamos el nuevo usuario en la BD
        usuario = new Usuario(req.body)
        await usuario.save();
        res.status(201).json({
            mensaje: 'usuario creado',
            nombre: usuario.nombre,
            uid: usuario._id
        })

    }catch(error){
        console.log(error)
        res.status(400).json({
            mensaje: 'El usuario no pudo ser creado'
        })
    }

}