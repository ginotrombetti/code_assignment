import { expect } from 'chai';
import * as request from 'supertest';
import { DataController} from "../../src/controllers/data.controller";
import { createServer } from '../../src/server';
import { DataResponse } from "../../src/interfaces/dataResponse";

const app = createServer();

describe('DataController', () => {
    describe('GET /get-data', () => {
        it('should return a valid response when getting data successfully', (done) => {
            const expectedData: DataResponse = {
                sample_mean: 1.0,
                sample_size: 10,
                standard_deviation: 4
            };
            request(app)
                .get(`/get-data`)
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.deep.equal(expectedData);
                    done(err);
                });
        });
    });
});