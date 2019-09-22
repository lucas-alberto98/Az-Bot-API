
# API AZBOT.IO

Link Api -> https://azbot.io:3020

A api é 100% feita com o [socket.io](https://socket.io/)
Essa api está disponivel para varias linguagems mas como exemplo usaremos o JavaScript (NodeJs)

## Exemplo basico de conexão
```
var socket = io('https://azbot.io:3020', {
    query : {
        token : "<Seu Token>"
    }
});

socket.on('connect', function(){
    console.log('Conectado')
})
```
## Exemplo desconexão
Caso aja alguma desconexão de sua internet ou de nosso servidor, essa função é chamada
Caso a conexão seja reestabelecida, a função connect (Logo acima) é chamada
```
socket.on('disconnect', function(){
  console.log('Disconnectado')
});
```

## Exemplo Log de erros
Sempre que acontece qualquer problema a função log é chamada informando o tipo de problema
```
socket.on('log', function(data){
    console.log(data)
});
```

## Exemplo receber mensagem
Sempre que o canal receber uma mensagem, essa função é chamada, Junto com ela vem um json com todas as informações, abaixo um exemplo do json.
```
socket.on('ApiReceiveMsg', function(data){
  console.log(data)
})
```
###### Json exemplo text
```
{
  "type": "chat",
  "sender": {
    "sender_pic": "/9j/ ... STRING BASE64 REFERENTE A IMAGME DE PERFIL ... ===",
    "timestamp": "2019-09-21 21:33:42",
    "sender_id": "5521912345678@c.us",
    "sender_number": "5521912345678",
    "sender_safe_name": "Lucas Alberto",
    "mime_pic": "image/jpeg"
  },
  "number": "5521980134265",
  "timestamp": "2019-09-21 21:33:42",
  "body": {
    "type": "text",
    "msg": "Olá Mundo"
  }
}
```

###### Exemplo recebimento de midia
```
{
  "type": "image",
  "sender": {
    "sender_pic": "/9j/4A ... String base 64 img de perfil ...=",
    "timestamp": "2019-09-21 21:36:35",
    "sender_id": "5521912345678@c.us",
    "sender_number": "5521912345678",
    "sender_safe_name": "Lucas Alberto",
    "mime_pic": "image/jpeg"
  },
  "number": "5521912345678",
  "timestamp": "2019-09-21 21:36:35",
  "body": {
    "type": "media",
    "base64": "/9j/4 ... String base 64 da midia ...EBA==",
    //Mime da midia, pode ser png, zip etc. Para saber mais: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/MIME_types
    "mime": "image/jpeg" 
  }
}
```

## Exemplo envio de Mensagem
Exemplo com o envio de mensagem, você deve enviar a mensagem de acordo com os parametros abaixo dentro de **data**
A função retorna um true em caso de envio com sucesso
```
let data = {
  "number": "5521912345678",
  "type": "text",
  "msg": "Olá mundo"
}

socket.emit('ApiSendMsg', data , function(data){
    console.log('Sucesso')           
    console.log(data)
});
```
