import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
    console.log(item)
   }

  const cartItemRemoveHandler = (id) => { 
    cartCtx.removeItem(id)
  }

  return (
    <Container>
      <Title>CART</Title>
      <Button onClick={cartCtx.showCartHandler}>X</Button>
      <Wrapper>
        <Item style={{ width: "45%" }}>ITEM</Item>
      </Wrapper>
      <Item>
      {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
      ))}
      </Item>
      <CartTotal>
        <CartSpan>
          <CartTitle>
            <strong>Total</strong>
          </CartTitle>
          <CartTotalAmount>{totalAmount}</CartTotalAmount>
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
  width: 400px;
  height: 700px;
  padding: 20px 30px;
  z-index: 999;
  overflow: auto;
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

/*const CartImg = styled.img`  
  
  border-radius: 2px;
  padding: 3px;
  width: 70px;

  min-height: 50vh;
  max-width: 900px;
  
`;*/

/*const CartDiv = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  margin: 10px 0px;
  padding: 0;

  <Item style={{ width: "20%" }}>PRICE</Item>
        <Item style={{ width: "35%" }}>QUANTITY</Item>
`;*/

/*const ItemPrice = styled.span`
display: flex;
text-align: right;
font-weight: bold;
margin-left: 100px
`;*/

/*const ItemQuantity = styled.button`
margin-left: 50px;
padding: 5px;
font-weight: 400;
background-color: white;
color: black;
border: 2px solid #008CBA;
`;*/

/*const RemoveButton = styled.button`
margin: 15px;
font-weight: bold;
color: white;
background-color: #f44336;
border-color: none;
`;*/

const Item = styled.span`
  display: list-item;
  align-items: center;
  border-bottom: 1px solid black;
  margin-right: 1.5em;
  padding-bottom: 10px;
  margin-top: 10px;
  font-style: italic;
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

/*{productsArr.imageUrl} 
       <CartDiv>
         {productsArr.title}
       </CartDiv>
        <ItemPrice>
         {productsArr.price}
       </ItemPrice>
       <ItemQuantity>// i have to add form over here
           5
       </ItemQuantity>
       <RemoveButton>
           -
       </RemoveButton>

/*<Item>
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
     </Item>*/

/*{cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} />
      ))}*/

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
