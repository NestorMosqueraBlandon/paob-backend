import { FastifyInstance, RouteOptions } from "fastify";
import { authRoutes } from "./auth";
import { healthCheckRoute } from "./health-check";
import { notesRoutes } from "./notes";
import { usersRoutes } from "./users";

const routes: RouteOptions[] = [
    healthCheckRoute,
    ...notesRoutes,
    ...usersRoutes,
    ...authRoutes
];

export const registerRoutes = (fastify: FastifyInstance) => {
    fastify.log.warn("Registering routes", routes);
  
    routes.map((route) => {
      fastify.route(route);
    });
  };