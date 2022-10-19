import fastify from "fastify";
import * as dotenv from 'dotenv';
import fastifyCors from '@fastify/cors'
import swagger  from '@fastify/swagger';

dotenv.config();

export const port = process.env.PORT;
export const host = "0.0.0.0";

const app = fastify({logger: true});

app.register(fastifyCors, {
    origin: true
});

app.register(swagger, {
    routePrefix: '/documentation',
    swagger:{
        info: {
            title: 'Fastify Template API',
            description: 'Template for start a basic API',
            version: '0.1.0'
        },
        externalDocs:{
            url: 'https://swagger.io'
        },
        host: 'localhost:4000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags:[{name: 'status', description: 'Status related end-points'},]
    },
    hideUntagged: true,
    exposeRoute: true,
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    uiHooks: {
        onRequest: function(request, replay, next){next()},
        preHandler: function(request, replay, next){next()}
    },
    staticCSP: true
})

export default app;