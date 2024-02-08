import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 1rem 0;
  background-color: ${(props) => props.theme.primary_dark};
  color: ${(props) => props.theme.light};
  text-align: center;
`;
