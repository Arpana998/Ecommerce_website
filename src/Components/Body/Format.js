import { Card, Button } from 'react-bootstrap';
import './Format.css'

const Format = (props) => {
  return (
    <>
    <Card style={{ height: '30rem', width: '22rem', border: 'none' }} className='mx-5 mt-2 card_style'>
      <Card.Title>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.imageUrl} style={{height:'20rem'}}/>
      <Card.Body>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
      </Card>
    
        </>
    );
}

export default Format;