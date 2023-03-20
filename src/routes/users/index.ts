import { RouteOptions } from "fastify";
import { registerUserRoute } from "./create";

export const usersRoutes: RouteOptions[] = [
    registerUserRoute
]