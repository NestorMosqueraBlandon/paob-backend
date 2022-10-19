import { FastifyInstance } from "fastify"
import {glob} from 'glob';

export const registerRoutes = (router: FastifyInstance) => {
    const routes = glob.sync(__dirname + '/**/*.routes.*');
    routes.map(route => register(route, router));
}

export const register = (routePath: string, router: FastifyInstance) => {
    const route = require(routePath);
    route.register(router);
}