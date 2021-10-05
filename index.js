
const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const elements = [1,2,3,4]
    res.render('index',{elements: elements})
})

app.get('/profile',(req,res)=>{
    const persona = {
        nombre : 'sergio',
        intereses: 'nodejs, ejs'
    }
    res.render('profile',{persona}) // actualmente, si se envía la variable como valor, crea una clave con el mismo nombre
    //por ello, en profile.ejs accedemos con la clave persona
})

app.listen(8080,()=>{
    console.log('server started')
})