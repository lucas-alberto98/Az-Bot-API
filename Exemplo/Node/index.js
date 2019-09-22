/*
* Exemplo de bot de echo 
*/


var io = require('socket.io-client')

var socket = io('https://azbot.io:3000', {
    query : {
        token : " < TOKEN >"
    }
});

socket.on('connect', () => {
    console.log('Conectado')
})

socket.on('log', function(data){
    console.log(data)
});

socket.on('ApiReceiveMsg', (dadosRecebidos) => {
    let dadosEnvio = {
        "number": dadosRecebidos.number,
        "type": "text",
        "msg": dadosRecebidos.body.msg
    }

    socket.emit('ApiSendMsg',  dadosEnvio , () =>{
        console.log('Enviado com sucesso')
    })
})