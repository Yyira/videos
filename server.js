//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
//    response.write('oooi')
//
  //  return response.end()
//})
//server.listen(3333)


import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
const server = fastify()

server.post ('/videos', ()=> {
    return 'hello World'
})

server.get ('/videos', ()=> {
    return 'hello World'
})

server.put ('/videos/:id', ()=> {
    return 'hello World'
})

server.delete ('/videos/:id', ()=> {
    return 'hello World'
})


server.listen(
    {port:3333}
)