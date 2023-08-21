#### Hello Team, I appreciate your time and consideration for the opportunity ! This is my backend application for the app
#### Make sure to install dependencies using `npm install`
#### Simply start the server by running `npm start` it is defaulted to port `3100` please do not change

#### You can also run tests the tests I created with the `npm test` script


## Routes

Data Controller Routes
The Data Controller handles requests related to data retrieval.

GET `/get-data`
This route retrieves data using the getData method from the DataService class.

Request
Method: GET
Response
Status Code: `200` (OK)

Body: JSON object with the following properties:

sample_mean: The sample mean value.
sample_size: The sample size value.
standard_deviation: The standard deviation value.
Status Code: `400` (Bad Request)

Body: JSON object with an error message in case of failure.
