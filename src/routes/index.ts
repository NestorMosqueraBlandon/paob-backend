import { FastifyInstance, RouteOptions } from "fastify";
import { healthCheckRoute } from "./health-check";
import { notesRoutes } from "./notes";
import { usersRoutes } from "./users";

const routes: RouteOptions[] = [
    healthCheckRoute,
    ...notesRoutes,
    ...usersRoutes
];

export const registerRoutes = (fastify: FastifyInstance) => {
    fastify.log.warn("Registering routes", routes);
  
    routes.map((route) => {
      fastify.route(route);
    });
  };