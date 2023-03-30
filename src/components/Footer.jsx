// import '../assets/styles/Footer.css'

import { Container, Nav, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <Navbar bg="dark"  variant="dark" fixed="bottom"  >
      <Container >
        <Nav className="mr-auto">
          <Nav.Link href="#">Acerca de nosotros</Nav.Link>
          <Nav.Link href="#">Política de privacidad</Nav.Link>
          <Nav.Link href="#">Términos y condiciones</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
        <Navbar.Text>
          Todos los derechos reservados &copy; Nombre de la empresa
        </Navbar.Text>
      </Container>
    </Navbar>
    </>
  );
}

export default Footer;
