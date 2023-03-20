import { FastifyInstance, RouteOptions } from "fastify";
import { healthCheckRoute } from "./health-check";
import { notesRoutes } from "./notes";

const routes: RouteOptions[] = [
    healthCheckRoute,
    ...notesRoutes,
];

export const registerRoutes = (fastify: FastifyInstance) => {
    fastify.log.warn("Registering routes", routes);
  
    routes.map((route) => {
      fastify.route(route);
    });
  };