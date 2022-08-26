import http from 'http';
console.log('iniciando');

http.createServer((req,res)=>
{
    //res.writeHead(200,{'Content-Type': 'text/plain'})  ;
    //res.writeHead(200,{'Content-Type': 'application/json'})  ;
    res.setHeader('Content-Disposition','attachment;filename=lista.csv')
    res.writeHead(200,{'Content-Type': 'application/csv'})  ;
    
    /*const persona =
    {
        id:1,
        nombre:'Fernando'

    }*/

    res.write('1,RFA\n');
    res.write('2,DFA\n');
    res.write('3,KFA\n');


/*    res.write(JSON.stringify(persona));*/
    res.end();

}

).listen(8080);



console.log('Escuchando el puerto 8080')