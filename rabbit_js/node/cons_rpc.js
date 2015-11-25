#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var q = 'rpc_queue';

        ch.assertQueue(q, {durable: false});
        ch.prefetch(1);
        console.log(' [x] Awaiting RPC requests');
        ch.consume(q, function reply(msg) {
            var n = parseInt(msg.content.toString());

            console.log(" [.] fib(%d) : ", n);
            var r = 0
            try{
            if (n> 10){
                console.log("upper limit exceed!");
                r = -2
            }else{
                r = fibonacci(n);

            }
            }catch(err){
                console.error(err.message)
                r = -1
            }

            ch.sendToQueue(
                msg.properties.replyTo,
                new Buffer(r.toString()),
                {
                    correlationId: msg.properties.correlationId
                }
            );

            ch.ack(msg); // fer un ack abans del callback
        });
    });
});

function fibonacci(n) {
    if (n == 0 || n == 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}