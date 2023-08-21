import React, {FC} from 'react';
import {CheckboxWrapper, CheckboxInput, CheckboxLabel} from './Checkbox.styled';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const Checkbox: FC<CheckboxProps> = ({label, checked, onChange}) => (
    <CheckboxWrapper>
        <CheckboxInput type="checkbox" checked={checked} onChange={onChange}/>
        <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
);


export default Checkbox;
