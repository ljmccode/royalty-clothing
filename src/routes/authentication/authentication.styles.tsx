import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media screen and (max-width: 1000px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    *:first-child {
      margin-bottom: 50px;
    }
  }
`;
