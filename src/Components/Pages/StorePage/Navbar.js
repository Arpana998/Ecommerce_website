import { Container, Navbar, Nav, Badge, Button } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import { Link } from 'react-router-dom';



function NavbarHeader(props) {

  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.length;
  console.log("onClick")

 /* const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);*/

  return (
    
   <div>
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="mx-auto parent" style={{ fontWeight: 'bold' }}>
          <Nav.Link as={Link} to="/home">HOME</Nav.Link>
          <Nav.Link as={Link} to="/">STORE</Nav.Link>
          <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
        </Nav>
        <Button onClick={cartCtx.showCartHandler} variant="secondary">
            {<FaShoppingCart color='white' fontSize='25px'/>}
            <Badge bg="secondary">{numberOfCartItems}</Badge>
        </Button>
      </Container>
    </Navbar>
    </>
    


</div>
    
    

    
  )
}

export default NavbarHeader;
//onClick={props.onClick}