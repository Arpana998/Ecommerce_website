import { Container, Navbar, Nav, Badge, Button } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';

function NavbarHeader(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="mx-auto parent" style={{ fontWeight: 'bold' }}>
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">STORE</Nav.Link>
          <Nav.Link href="#pricing">ABOUT</Nav.Link>
        </Nav>
        <Button onClick={props.onShowCart} variant="secondary">
            {<FaShoppingCart color='white' fontSize='25px'/>}
            <Badge bg="secondary">{10}</Badge>
        </Button>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader;
//onClick={props.onClick}