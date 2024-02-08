import { Container } from '../../styles/global';
import { FooterContainer } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Container data-testid="footer">
        cervejaria &copy; alguns direitos reservados.
      </Container>
    </FooterContainer>
  );
};

export default Footer;
