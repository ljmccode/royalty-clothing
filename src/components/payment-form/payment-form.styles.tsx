import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    min-width: unset;
    width: 90vw;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  
`;

export const CardInputContainer = styled.div`
  border: lightgray 1px solid;
  padding: 15px;
`;
