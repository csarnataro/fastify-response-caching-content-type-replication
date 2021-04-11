// const fastify = require('fastify')
const fastifyResponseCaching = require('fastify-response-caching')

// // Require the framework and instantiate it
// const fastify = require('fastify')({
//   logger: true
// })

// fastify.register(fastifyResponseCaching)


// // Declare a route
// fastify.get('/', function (request, reply) {
//   reply.send({ hello: 'world' })
// })

// // Run the server!
// fastify.listen(3000, function (err, address) {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
//   fastify.log.info(`server listening on ${address}`)
// })


// server.js
'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(fastifyResponseCaching, { ttl: 60*6000})
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}