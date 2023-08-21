import React, { FC } from "react";
import {ButtonWrapper, GeneralButton} from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
  value: string
}

const Button: FC<ButtonProps> = ({ onClick, value }) => (
  <ButtonWrapper data-testid="GeneralButton">
    <GeneralButton onClick={onClick}>{value}</GeneralButton>
  </ButtonWrapper>
);

export default Button;
