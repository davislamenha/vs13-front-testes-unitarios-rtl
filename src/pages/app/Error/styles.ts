import styled from 'styled-components';

export const ErrorContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.accent_light};
  color: ${(props) => props.theme.primary_dark};

  h1 {
    font-size: 7rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 5rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 3rem;
  }
`;
