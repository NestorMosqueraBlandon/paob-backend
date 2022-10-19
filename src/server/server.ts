import { registerRoutes } from "../routes";
import app, { host, port } from "./app";


export class Server {

    constructor(){
        registerRoutes(app);
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            app.listen(port, host, () => {
                app.log.info(`App is tunning at http://${host}:${port} in dev mode`);
                app.log.info(`Press CTRL-C to stop`);
            });
        })
    }

    async start(){
        return this.listen();
    }
}

const server = new Server();

server.start();

export default Server;