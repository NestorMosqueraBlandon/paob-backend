import { getAllNotes } from "business-logic";
import { RouteMethod } from "constant-definitions";
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';

interface Query {
    page: number;
    limit: number;
}
  
export const getAllNotesRoute: RouteOptions = {
    method: RouteMethod.GET,
    url: '/notes',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { query } = request;
            const { page, limit } = query as Query;
            const notes = await getAllNotes(page, limit);
            
            reply.status(200).send(notes);
          } catch (err) {
            reply.status(500).send(err);
          }
    }
}
