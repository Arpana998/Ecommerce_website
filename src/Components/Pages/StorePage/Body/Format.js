import { Card } from 'react-bootstrap';
import './Format.css'
import { useContext } from 'react';
import CartContext from '../../../../Store/cart-context';
import CartItemForm from '../CartItemForm';
import { Link } from 'react-router-dom';


const Format = (props) => {

  const cartCtx = useContext(CartContext)
  

  const submitHandler = (amount) => {
    
    //console.log(props);
    /*cartCtx.items = ({
     id: props.id,
     name: props.title,
     amount: props.amount,
     price: props.price
    })*/

    cartCtx.addItem({
      id: props.id,
      name: props.title,
      imageUrl: props.imageUrl,
      amount: amount,
      price: props.price,
     
    })

    // cartCtx.addToStorage({
    //   id: props.id,
    //   name: props.title,
    //   imageUrl: props.imageUrl,
    //   amount: amount,
    //   price: props.price,
    // })
    console.log(props.imageUrl)
    
  }


  return (
    <>
    <Card style={{ height: '30rem', width: '22rem', border: 'none' }} className='mx-5 mt-2 card_style'>
      <Card.Title>{props.title}</Card.Title>
      <Link to={`/store/product/${props.id}`}><Card.Img variant="top" src={props.imageUrl} style={{height:'20rem'}}/></Link>
      <Card.Body>
        <Card.Text>
          {props.price}
        </Card.Text>
        <CartItemForm onAddToCart={submitHandler}/>
        
      </Card.Body>
      </Card>
    
        </>
    );
}

export default Format;


////<Button variant="primary" onClick={submitHandler}>Add to cart</Button>