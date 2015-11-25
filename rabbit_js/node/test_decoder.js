#!/usr/bin/env node


var msg = {
    "fields": {
        "consumerTag": "amq.ctag-q8I70H1_Xur-egcZOiZrcw",
        "deliveryTag": 1,
        "redelivered": false,
        "exchange": "",
        "routingKey": "amq.gen-IueTre0qMSMoKOqRHm5gFg"
    },
    "properties": {"correlationId": "0.56183470319956540.42535291309468450.3715424567926675"},
    "content": {
        "type": "Buffer",
        "data": [97, 115, 116, 49, 51, 46, 98, 101, 110, 99, 104, 98, 111, 120, 32, 114, 101, 115, 112, 111, 110, 115, 101, 58, 32, 119, 97, 114, 109, 85, 112, 58, 32, 119, 97, 114, 109, 117, 112, 10]
    }
}

var Decoder = require('string_decoder').StringDecoder;
var decoder = new Decoder('utf8');

console.log(msg.content.data)
msg.content.data.splice(0, 0, '');
var result = msg.content.data.reduce(function(stack, item){
  return  stack+=String.fromCharCode(item)
})

console.log(result.toString())