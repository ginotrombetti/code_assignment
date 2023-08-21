import React, { FC } from 'react';
import { DataLabelWrapper } from './DataLabel.styled';

interface DataLabelProps {label: string}

const DataLabel: FC<DataLabelProps> = ({label}) => (
 <DataLabelWrapper data-testid="DataLabel">
     <label>{label}</label>
 </DataLabelWrapper>
);

export default DataLabel;
