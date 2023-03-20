import { createNote } from "business-logic";
import { RouteMethod } from "constant-definitions";
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { Note } from "types";

export const createNoteRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/notes',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const { body } = request;
            const note = body as Note;
            const result = await createNote(note);
            
            reply.status(200).send(result);
          } catch (err) {
            reply.status(500).send(err);
          }
    }
}
