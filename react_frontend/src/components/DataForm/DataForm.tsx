import React, { useState, useEffect } from 'react';
import { DataFormWrapper, DataRow, ButtonRow } from './DataForm.styled';
import { getData } from './../../services/data.service';
import DataInput from "../DataInput/DataInput";
import Button from "../Button/Button";
import DataLabel from "../DataLabel/DataLabel";
import Checkbox from "../Checkbox/Checkbox";
import { DataResponse } from "../../interfaces/dataResponse";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import DataTable from "../DataTable/DataTable";

const FormComponent = () => {

    // Set All state variables
    const [sampleMean, setSampleMean] = useState<null|number>(null);
    const [sampleSize, setSampleSize] = useState<null|number>(null);
    const [standardDeviation, setStandardDeviation] = useState<null|number>(null);
    const [hypothesisMean, setHypothesisMean] = useState<null|number>(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const [sampleMeanError, setSampleMeanError] = useState<null|string>(null);
    const [sampleSizeError, setSampleSizeError] = useState<null|string>(null);
    const [standardDeviationError, setStandardDeviationError] = useState<null|string>(null);
    const [hypothesisMeanError, setHypothesisMeanError] = useState<null|string>(null);

    const [loadingError, setLoadingError] = useState(false);
    const [loadingErrorMessage, setLoadingErrorMessage] = useState<string>("");

    const [showTable, setShowTable] = useState(false);

    const fetchData = async () => {
        setLoadingError(false);
        try {
            // Get and set my initial data
            const data: DataResponse = await getData();
            setSampleMean(data.sample_mean);
            setSampleSize(data.sample_size);
            setStandardDeviation(data.standard_deviation);
            setIsLoading(false); // Set loading state to false
        } catch (error) {
            setIsLoading(false); // Set loading state to false
            setLoadingError(true);
            setLoadingErrorMessage(`Error retrieving data from api ${error}`);
        }
    };
    const  validateSampleSize = (sampleSize: number | null) => {
        return  Number.isInteger(sampleSize) && sampleSize !== null && sampleSize >= 2;
    }


    const validateStandardDeviation = (standardDeviation: number | null) => {
        return !isNaN(standardDeviation as number)  && standardDeviation !== null && standardDeviation > 0;
    }

    const validateNumber = (checkNumber: number | null) => {
        return !isNaN(checkNumber as number); // Check if it's a numeric value
    }
    const okButton = () => {
        validateForm();
    }

    const handleSampleMeanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSampleMean(event.target.value === '' ? null : Number(event.target.value));
    };

    const handleSampleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSampleSize(event.target.value === '' ? null : Number(event.target.value));
    };

    const handleStandardDeviationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStandardDeviation(event.target.value === '' ? null : Number(event.target.value));
    };

    const handleHypothesisMeanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHypothesisMean(event.target.value === '' ? null : Number(event.target.value));
    };
    const validateForm = () => {
        // Validate all inputs

        const sampleMeanValue = !validateNumber(sampleMean) ? "Invalid sample mean": null;
        setSampleMeanError(sampleMeanValue);

        const sampleSizeValue = !validateSampleSize(sampleSize) ? "Sample size must be an Integer greater than or equal to 2": null;
        setSampleSizeError(sampleSizeValue);

        const standardDeviationValue = !validateStandardDeviation(standardDeviation) ? "Standard Deviation must be an Integer greater than 0": null;
        setStandardDeviationError(standardDeviationValue);

        if (hypothesisMean !== undefined) {
            const hypothesisMeanValue = !validateNumber(hypothesisMean) ? "Invalid Hypothesis Mean": null;
            setHypothesisMeanError(hypothesisMeanValue);
        }

        if (hypothesisMean === null && standardDeviationValue === null && sampleMeanValue === null && sampleSizeValue === null) {
            setShowTable(true);
        } else {
            setShowTable(false);
        }
    }
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setHypothesisMean(null);
    };
    const reset = () => {
        // Reset all Errors
        // Hide the table, refetch Data
        setHypothesisMeanError(null);
        setSampleSizeError(null);
        setStandardDeviationError(null);
        setHypothesisMeanError(null);
        setHypothesisMean(null);
        setIsChecked(false);
        setShowTable(false);
        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, []); //

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (loadingError) {
        return <ErrorMessage message={loadingErrorMessage}></ErrorMessage>;
    }

    return (
        <DataFormWrapper>
            <DataRow>
                <DataLabel label={"Sample Size:"}></DataLabel>
                <DataInput value={sampleSize} onChange={handleSampleSizeChange}/>
            </DataRow>
            <DataRow>
                {sampleSizeError && <ErrorMessage message={sampleSizeError} />}
            </DataRow>

            <DataRow>
                <DataLabel label={"Sample Mean:"}></DataLabel>
                <DataInput value={sampleMean} onChange={handleSampleMeanChange}/>
            </DataRow>
            <DataRow>
                {sampleMeanError && <ErrorMessage message={sampleMeanError} />}
            </DataRow>

            <DataRow>
                <DataLabel label={"Standard Deviation:"}></DataLabel>
                <DataInput value={standardDeviation} onChange={handleStandardDeviationChange}/>
            </DataRow>
            <DataRow>
                {standardDeviationError && <ErrorMessage message={standardDeviationError} />}
            </DataRow>

            <DataRow>
                <Checkbox label={"Perform Hypothesis Test"} checked={isChecked} onChange={handleCheckboxChange}></Checkbox>
            </DataRow>

            <DataRow>
                <DataLabel label={"Hypothesized Mean:"}></DataLabel>
                <DataInput value={hypothesisMean} onChange={handleHypothesisMeanChange} disabled={!isChecked}/>
            </DataRow>

            <DataRow>
                {hypothesisMeanError && <ErrorMessage message={hypothesisMeanError} />}
            </DataRow>

            <ButtonRow>
                <Button onClick={okButton} value={"Ok"}></Button>
                <Button onClick={reset} value={"Reset"}></Button>
            </ButtonRow>

            {showTable && <DataTable sampleMean={sampleMean} hypothesisMean={hypothesisMean} sampleSize={sampleSize} standardDeviation={standardDeviation}/>}
        </DataFormWrapper>
    );
};
export default FormComponent;