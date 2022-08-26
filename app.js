//instalar npm i express
//instalar  handlebar.js  para renderizar ciertas secciones
// Hay que instalarlo para express 
//npm install hbs  


import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('iniciando');
const port=8080;

const app= express();



//Servir contenido estático
app.use(express.static('public'));


app.get('/generic',(req,res)=>
{
    res.sendFile(__dirname +'/public/generic.html');

})


app.get('/elements',(req,res)=>
{
    res.sendFile(__dirname +'/public/elements.html');

})
app.get('*',(req,res)=>
{
    res.sendFile (__dirname + '/public/404.html');
});


app.listen(port,()=>{

    console.log(`Example app listeinign at http://localhos:${port}`)
}
);



console.log('Escuchando el puerto 8080')