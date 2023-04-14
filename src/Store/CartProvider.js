import CartContext from "./cart-context";
import { useEffect, useReducer } from "react";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
  //console.log(state.item)
  //console.log(action.item)
  if (action.type === "REPLACE"){
   return{
    items: action.responsedata.items || [],
    totalAmount: action.responsedata.totalAmount || 0,
   }
   }
  

  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }


    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // if(action.type === 'ADDTOSTORAGE'){
  //     console.log(action.item)
  // }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const authCtx = useContext(AuthContext);

  const displayCartHandler = () => {
    setCartIsShown(!cartIsShown);
    console.log("am i visible");
  };

 

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    // dispatchCartAction({ type: 'ADDTOSTORAGE', item: item })
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const replaceItemToCartHandler = (responsedata) => {
    dispatchCartAction({ type: "REPLACE", responsedata });
    console.log(responsedata);
    // dispatchCartAction({ type: 'ADDTOSTORAGE', item: item })
  };

  

  useEffect(() => {
    let email = localStorage.getItem("email");
    if(authCtx.isLoggedin){
        console.log('Am I rendering');
        getData();
    }
    async function getData() {
        try {
          const response = await fetch(
            `https://ecommerce-website-8df52-default-rtdb.firebaseio.com//${email}.json`
          );
          const res = await response.json();
          console.log(res)
          replaceItemToCartHandler(res);
        } catch (err) {
         replaceItemToCartHandler({items:[],totalAmount:0});
          alert(err.message);
        }
      }
    
    
  },[authCtx.isLoggedin])

  useEffect(() => {
    // 'https://[PROJECT_ID].firebaseio.com/users/jack/name.json'
    let email = localStorage.getItem("email");
    if (email) {
      putData();
    }
    async function putData() {
      const obj = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
      };
      try {
        const response = await fetch(
          `https://ecommerce-website-8df52-default-rtdb.firebaseio.com//${email}.json`,
          {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();
      } catch (err) {
        alert(err.message);
      }
    }
  }, [cartState.items, cartState.totalAmount]);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    cartIsShown: cartIsShown,
    showCartHandler: displayCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
