const express = require('express')
const router = express.Router();
const {check} = require('express-validator')
const {crearUsuario,loginUsuario,revalidarLogin}= require('../Controllers/auth')
const {validarCampos} = require('../middleware/validar-campos')

router.post(
    "/new",
    [
        check('name', 'El nombre es obligatorio').not().isEmpty()
        ,check('email', 'El email es obligatorio').isEmail()
        ,check('password', 'Ingrese una contraseña valida').isLength({min:6})
        ,validarCampos
    ], crearUsuario)

router.post(
    "/login",
    [
        check('name', 'Usuario incorrecto').equals('admin')
        ,check('password', 'Contraseña incorrecta').equals('admin')
        ,validarCampos
    ], loginUsuario)

router.get("/renew", revalidarLogin)

module.exports = router;