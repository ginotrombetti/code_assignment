import React from "react";
import {
  WelcomeWrapper,
  Container,
  Description,
  Title,
} from "./Welcome.styled";
import DataForm from "../DataForm/DataForm";


const Welcome = () => (
  <WelcomeWrapper data-testid="Welcome">
    <Container>
      <Title>Hello Team, Welcome to my Assignment.</Title>
      <Description>
        Please refer to the README.md for more information.
      </Description>
      <DataForm />
    </Container>
  </WelcomeWrapper>
);

export default Welcome;
