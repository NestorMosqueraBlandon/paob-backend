import { RouteOptions } from "fastify";
import { createNoteRoute } from "./create";
import { getAllNotesRoute } from "./list";

export const notesRoutes: RouteOptions[] = [
    getAllNotesRoute,
    createNoteRoute
]