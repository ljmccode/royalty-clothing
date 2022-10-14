import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  min-height: 90vh;

  @media screen and (min-width: 992px) {
    width: 60%;
  }

  .checkout-header {
    display: flex;
    border-bottom: 1px solid darkgray;
    width: 100%;
    padding: 10px 0;

    .header-block {
      width: 23%;
      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
`;
