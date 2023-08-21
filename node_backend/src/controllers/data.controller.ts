import { DataService } from "../services/data.service";
import { Request, Response } from 'express';
import { DataResponse } from "../interfaces/dataResponse";

export class DataController {
    private dataService: DataService;

    constructor() {
        this.dataService = new DataService();
    }
    public getData(req: Request, res: Response) {
        try {
            const returnData: DataResponse = this.dataService.getData();
            res.status(200).json(returnData);
        } catch (error) {
            res.status(400).json({ error: `Failed to get data: ${error}` });
        }
    }
}