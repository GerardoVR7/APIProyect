const userDAO = require('../models/usersDAO')
const bcrypt = require('bcrypt')
const userValidate = (req, res) => {
    userDAO.findByUsername(req.params.username, data =>{
        try {
            if (!data) throw new Err("Usuario disponible")
            res.send({
                status: true, message: 'Usuario ocupado' })
        }
        catch(Err) {
            res.send({
                status: false, message: 'Usuario disponible' })
        }
    })
}

const getAllUsers = (req, res) => {

    userDAO.getAllUsers(data => {
            try {
                if (!data) throw new Err("Usuario disponible")
                res.send({
                    status: true, body: data
                })
            } catch (Err) {
                res.send({
                    status: false, message: 'No existen usuarios'
                })
            }
        }
    )
}


const signup = (req, res) => {
        const user ={
            idRol : req.body.idRol,
            nombre : req.body.nombre,
            apellido: req.body.apellido,
            username: req.body.username,
            password: bcrypt.hash(req.body.password,10)
        }
        userDAO.insertUser(user, (data) =>{
                console.log(data)
                if(data && data.affectedRows == 1){
                    res.send({
                        status: true, message: 'usuario creado exitosamente'
                    })
                }else{
                    res.send({
                        status: false, message:'ha ocurrido un error al crear el usuario'
                    })
                }
            }
        )

}


module.exports = {
    userValidate,
    getAllUsers,
    signup
}