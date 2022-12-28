import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ArchyNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top" expand="lg" >
        <Container>
          <Navbar.Brand href="main">Archy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="projekte">Projekte</Nav.Link>
            <Nav.Link href="erfassung">Erfassen</Nav.Link>
            <Nav.Link href="bearbeitung">Bearbeiten</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ArchyNavbar;