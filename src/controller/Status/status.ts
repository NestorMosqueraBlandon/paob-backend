import { FastifyReply, FastifyRequest } from "fastify";
import { Controller } from "../Controller";

export class Status implements Controller {
    async run(req: FastifyRequest, res: FastifyReply){
        res.status(200).send({status: "OK"});
    }
}