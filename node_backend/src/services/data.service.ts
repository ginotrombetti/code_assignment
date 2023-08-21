import { DataResponse } from "../interfaces/dataResponse";

export class DataService {
    public getData(): DataResponse {
        const data: DataResponse = {
            sample_mean: 1.0,
            sample_size: 10,
            standard_deviation: 4
        }
        return data;
    }
}