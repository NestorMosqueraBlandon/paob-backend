import { registerUser } from "business-logic/users/register";
import { RouteMethod } from "constant-definitions";
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserDto } from "types";

export const registerUserRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/users',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { body } = request;
            const user = body as CreateUserDto;
            const result = await registerUser(user);
            
            reply.status(200).send(result);
          } catch (err) {
            reply.status(500).send(err);
          }
    }
}
