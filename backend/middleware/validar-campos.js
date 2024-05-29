const express = require('express')
const {validationResult} = require('express-validator')

const validarCampos = (req,res = express.response, next)=>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({
            ok: false,
            erros: erros.mapped()
        })
    }

    next()
}

module.exports = {validarCampos}
