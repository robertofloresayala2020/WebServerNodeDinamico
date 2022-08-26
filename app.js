//instalar npm i express
//instalar  handlebar.js  para renderizar ciertas secciones
// Hay que instalarlo para express 
//npm install hbs  


import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import hbs from 'handlebars'
import 'dotenv/config' 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port=process.env.PORT;
const app= express();





hbs.registerPartial(__dirname + '/views/partials',function(err){});
app.set('view engine', 'hbs'); 


//Servir contenido estático
app.use(express.static('public'));

app.get('/',(req,res)=>
{
    
    
    // res.send('hola'); //Renderiza el string
    res.render('home',{             //Renderiza las vista home.hbs
        nombre:'Roberto Flores',    //Envia las propiedades
        titulo:'Curso de Node'

    }); //van los argumentos 


})

/*
app.get('/generics',(req,res)=>
{
    res.sendFile(__dirname +'/public/generic.html');

})

app.get('/elements',(req,res)=>
{
    res.sendFile(__dirname +'/public/elements.html');

})*/
app.get('*',(req,res)=>
{
    res.sendFile (__dirname + '/public/404.html');
});


app.listen(port,()=>{

    console.log(`Example app listeinign at http://localhos:${port}`)
}
);



console.log('Escuchando el puerto 8080')