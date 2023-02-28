
import styled from "styled-components";




const Cart = (props) => {

    const productsArr = 

        {
            id: 1,
            title: 'Colors',
            imageUrl: (

                <CartImg
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                
                alt="./"
                
                ></CartImg>
                ),
            price: 100,
    
        }
    
        
    

  return (
    <Container>
      <Title>CART</Title>
      <Button onClick={props.onCloseCart}>X</Button>
      <Wrapper>
        <Item style={{ width: "45%" }}>ITEM</Item>
        <Item style={{ width: "20%" }}>PRICE</Item>
        <Item style={{ width: "35%" }}>QUANTITY</Item>
      </Wrapper>
      <Item>
      {productsArr.imageUrl} 
        <CartDiv>
          {productsArr.title}
        </CartDiv>
         <ItemPrice>
          {productsArr.price}
        </ItemPrice>
        <ItemQuantity>
            1
        </ItemQuantity>
        <RemoveButton>
            REMOVE
        </RemoveButton>
      </Item>
      <CartTotal>
        <CartSpan>
        
          <CartTitle>
            
            {console.log(productsArr.title)}
            <strong>Total</strong>
          </CartTitle>
          <CartTotalAmount>total Amount</CartTotalAmount>
        </CartSpan>
        <CartButton>PURCHASE</CartButton>
      </CartTotal>
    </Container>
  );
};

export default Cart;

const Container = styled.section`
  margin: 0px;
  position: fixed;
  top: 50px;
  height: 95%;
  right: 0;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(177, 103, 103);
  min-height: 50vh;
  max-width: 900px;
  padding: 20px 30px;
  z-index: 999;
`;
const Title = styled.h2`
  text-align: center;
  margin: 20px 0px;
  padding: 0;
`;
const Button = styled.button`
  position: absolute;
  cursor: pointer;
  color: rgb(121, 117, 117);
  top: 0;
  right: 0;
  margin: 20px;
  background: none;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid rgb(121, 117, 117);
  border-radius: 7px;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CartImg = styled.img`  
  
  border-radius: 2px;
  padding: 3px;
  width: 70px;
  
`;

const CartDiv = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  margin: 10px 0px;
  padding: 0;
`;

const ItemPrice = styled.span`
display: flex;
text-align: right;
font-weight: bold;
margin-left: 100px
`;

const ItemQuantity = styled.button`
margin-left: 50px;
padding: 5px;
font-weight: 400;
background-color: white;
color: black;
border: 2px solid #008CBA;
`;

const RemoveButton = styled.button`
margin: 15px;
font-weight: bold;
color: white;
background-color: #f44336;
border-color: none;
`;

const Item = styled.span`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  margin-right: 1.5em;
  padding-bottom: 10px;
  margin-top: 10px;
`;
const CartTotal = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  margin: 20px 30px 20px 20px;
`;
const CartSpan = styled.span``;
const CartTitle = styled.span`
  margin-right: 10px;
  font-size: 1.5rem;
`;
const CartTotalAmount = styled.span``;
const CartButton = styled.button`
  background: #56ccf2;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 8%;
  padding: 12px;
  cursor: pointer;
`;






/*import Modal from "./Modal";



const cartElements = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]


const Cart = (props) => {

    const cartItems = cartElements.map((item) => <li>{item.title}</li>)

    return (
        <Modal>
            <div>
                {cartItems}
                <div>
                    <span>Total Amount</span>
                    <span>$50.54</span>
                </div>
                <div>
                    <button>Close</button>
                    <button>Order</button>
                </div>
            </div>

        </Modal>
    )
}

export default Cart;*/