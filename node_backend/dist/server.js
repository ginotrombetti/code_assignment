"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express = require("express");
const cors = require("cors");
const data_controller_1 = require("./controllers/data.controller");
function createServer() {
    const dataController = new data_controller_1.DataController();
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.get('/', (req, res) => {
        res.send({ greeting: 'Hello, to the backend entry point' });
    });
    app.get('/get-data', (req, res) => {
        dataController.getData(req, res);
    });
    return app;
}
exports.createServer = createServer;
//# sourceMappingURL=server.js.map