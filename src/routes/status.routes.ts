import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Status } from "../controller/Status/status";
import Get from "../documentation/status/get";

export const register = (router: FastifyInstance) => {
    
    const controller = new Status;

    router.get('/api/v1/status', Get, (req: FastifyRequest, res: FastifyReply) => controller.run(req, res));

}