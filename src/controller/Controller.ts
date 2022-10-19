import { FastifyReply, FastifyRequest } from "fastify";

export interface Controller{
    run(req: FastifyRequest, res: FastifyReply): Promise<void>;
}