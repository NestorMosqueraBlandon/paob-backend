import { verify } from "business-logic";
import { RouteMethod } from "constant-definitions";
import { RouteOptions } from "fastify";

export const healthCheckRoute: RouteOptions = {
    method: RouteMethod.GET,
    url: '/health-check',
    handler: async () => {
        return {
            appVersion: "1.0.0",
            status: "OK",
            uptime: process.uptime(),
        }
    }
}