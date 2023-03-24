import { login } from 'business-logic/auth/login';
import { RouteMethod } from 'constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';

export const loginRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/login',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const { body } = request;
            const data = body as {username: string, password:string};
            const token = await login(data);
            reply.status(201).send(token);
        }catch(err){
            reply.status(500).send(err);
        }
    }   
}