'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

const myBigFatArray = [];

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      let temp = [];
      for (let i = 0; i < 10000; i++) {
        temp.push(i);
      }
      myBigFatArray.push(temp);
        reply('Hello, world!');
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});