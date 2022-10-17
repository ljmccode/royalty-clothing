import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    width: 90vw;

    .buttons-container {
      justify-content: space-evenly;
    }
  }
`;
