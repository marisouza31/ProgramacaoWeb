const express = require('express')
const app = express()


app.get('/',function(req, res){
    res.send('Olá')
})

app.listen(8081,function(){
    console.log('Server está rodando na porta 8081')
}) 