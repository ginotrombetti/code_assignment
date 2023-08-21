"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataController = void 0;
const data_service_1 = require("../services/data.service");
class DataController {
    constructor() {
        this.dataService = new data_service_1.DataService();
    }
    getData(req, res) {
        try {
            const returnData = this.dataService.getData();
            res.status(200).json(returnData);
        }
        catch (error) {
            res.status(400).json({ error: `Failed to get data: ${error}` });
        }
    }
}
exports.DataController = DataController;
//# sourceMappingURL=data.controller.js.map