import { expect } from 'chai';
import { DataService } from '../../src/services/data.service';
import { DataResponse } from '../../src/interfaces/dataResponse';

describe('dataService', () => {
    describe('getData', () => {
        it('should return the expected data', () => {
            const dataService = new DataService();

            const expectedData: DataResponse = {
                sample_mean: 1.0,
                sample_size: 10,
                standard_deviation: 4
            };

            const actualData: DataResponse = dataService.getData();

            expect(actualData).to.deep.equal(expectedData);
        });
    });
});