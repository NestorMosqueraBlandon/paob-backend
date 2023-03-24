import "dotenv/config";
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { initDataSources } from "data-sources";
import { registerRoutes } from "routes";
import Logger from "bunyan";
import { verify } from "business-logic";

const { PORT, HOST, MONGODB_URL } = process.env;

const log: Logger = Logger.createLogger({
  name: "paob",
  streams: [
    {
      level: "debug",
      stream: process.stdout,
    },
  ],
});

const main = async () => {
  await initDataSources({
    mongoose: {
      mongoUrl: MONGODB_URL,
    },
  });

  const server = fastify({
    logger: true,
  });

  server.register(fastifyCors, {
    origin: "*",
  });

  server.addHook("preValidation", verify);

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v1" }
  );

  await server.listen({ port: Number(PORT), host: HOST }, () => {
    log.info(`Backend App is running at http://localhost:${PORT}`);
    log.info("Press CTRL-c to stop");
  });
};

void main();
