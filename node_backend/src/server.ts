import * as express from 'express';
import cors = require('cors');
import { DataController } from "./controllers/data.controller";

export function createServer() {
    const dataController = new DataController();
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get('/', (req: express.Request, res: express.Response) => {
        res.send({ greeting: 'Hello, to the backend entry point' });
    });

    app.get('/get-data', (req: express.Request, res: express.Response) => {
        dataController.getData(req, res)
    });
    return app;
}
