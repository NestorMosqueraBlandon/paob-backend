import fastify from "fastify";
import * as dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import { initDataSources } from "data-sources";
import { registerRoutes } from "routes";

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || "0.0.0.0";

( async() => {
    await initDataSources({
        mongoose: {
            mongoUrl: process.env.MONGODB_URL,
        }
    })
    

    const server = fastify({
        logger: true
    });

    server.register((instance, options, next) => {
        registerRoutes(instance);
        next();
    },
    {prefix: 'api/v1'});

    server.register(fastifyCors, {
        origin:true
    })

    await server.listen({port: PORT, host: HOST}, () => {
        server.log.info(`Backend App is running at http://localhost:${PORT}`);
        server.log.info("Press CTRL-c to stop");
    });
})();