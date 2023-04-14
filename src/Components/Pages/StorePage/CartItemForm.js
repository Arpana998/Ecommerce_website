import { useRef } from 'react';
import './CartItemForm.css';
import Input from './Input';
import React from 'react';



const CartItemForm = (props) => {
  
    const amountInputRef = useRef();  

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountInNumber = +enteredAmount;

        props.onAddToCart(enteredAmountInNumber);
    }
   

    return <form className='form' onSubmit={submitHandler}>
        <Input
        label='Amount'
        input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }}
        ref={amountInputRef}
         />
        <button>Add To Cart</button>
        
    </form>
}

export default CartItemForm;