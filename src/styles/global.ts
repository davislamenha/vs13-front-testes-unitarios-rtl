import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

#root {
  min-height: 100vh;
  position: relative;
display: flex;
flex-direction: column;
}

img {
  display: block;
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;

export const Container = styled.div`
  width: min(100% - 60px, 1440px);
  margin: 0 auto;
`;
