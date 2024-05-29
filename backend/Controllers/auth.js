const express = require('express')
const {validationResult} = require('express-validator')

const crearUsuario = (req,res = express.request)=>{
    const {name,email,password} = req.body;

    res.status(200).json({
        ok: true,
        name,email,password
    })
}

const loginUsuario = (req,res = express.request)=>{
    const {name,password} = req.body;
    res.status(200).json({
        ok: true,
        name, password
    })
}

const revalidarLogin = (req,res = express.request)=>{
    res.json({
        ok: true
    })
}

module.exports={
    crearUsuario,
    loginUsuario,
    revalidarLogin
}