import React, { FC } from 'react';
import { DataInputWrapper } from './DataInput.styled';

interface DataInputProps {
    value: number | null;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;

}


const DataInput: FC<DataInputProps> = ({ value, disabled, onChange}) => {

    return (
        <DataInputWrapper data-testid="DataInput">
            <input type="number" value={value ?? ''} disabled={disabled} onChange={onChange}/>
        </DataInputWrapper>
    );
};


export default DataInput;
