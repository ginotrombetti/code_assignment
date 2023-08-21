import React, { FC } from 'react';
import { ErrorMessageWrapper, Message } from './ErrorMessage.styled';

interface ErrorMessageProps {
    message: string | null;
}

const ErrorMessage: FC<ErrorMessageProps> = ({message}) => (
 <ErrorMessageWrapper data-testid="ErrorMessage">
     <Message>{message}</Message>
 </ErrorMessageWrapper>
);

export default ErrorMessage;
