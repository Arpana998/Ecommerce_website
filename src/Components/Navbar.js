import { Container, Navbar, Nav } from 'react-bootstrap';

function NavbarHeader()  {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto parent" style={{fontWeight: 'bold'}}>
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">STORE</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarHeader;