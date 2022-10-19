import { FastifyInstance, RouteOptions } from "fastify";
import { healthCheckRoute } from "./health-check";

const routes: RouteOptions[] = [
    healthCheckRoute
];

export const registerRoutes = (fastify: FastifyInstance) => {
    fastify.log.warn("Registering routes", routes);
  
    routes.map((route) => {
      fastify.route(route);
    });
  };