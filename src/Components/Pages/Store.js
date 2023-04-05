import React, { useContext } from 'react';
import Music from './StorePage/Body/Music';
import MusicContainer from './StorePage/Body/MusicContainer';
import ContainerTop from './StorePage/ContainerTop';
import Cart from './StorePage/Cart';
import CartContext from '../../Store/cart-context';



const Website = (props) => {

  // const [cartIsShown, setCartIsShown] = useState(false)

  
  //  const displayCartHandler = () => {
  //   setCartIsShown(true)
  //  }

  //  const colseCartHandler = () => {
  //   setCartIsShown(false)
  //  }

  const cartCtx = useContext(CartContext)
  console.log(cartCtx)

   
  return (
    <div>
      {cartCtx.cartIsShown && <Cart />}
      {console.log(cartCtx.cartIsShown)}
      {/* <NavbarHeader  onShowCart={displayCartHandler} /> */}
      <ContainerTop />
      <MusicContainer />
      <Music />
      </div>
      
    
  )
}

export default Website;