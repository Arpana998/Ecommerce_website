import './CartItem.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    console.log(props)

    return (
        <li className="cart-item">
            <div>
                <h2 className='item-name'>{props.name}</h2>
                <img src={props.imageUrl} className='cart-img' alt='ProductImg' />
                <div className="summary">
                    <span className="price">{price}</span>
                    <span className="amount">{props.amount}</span>
                </div>
                
            </div>
            <div className="action">
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>

        </li>
    )

}

export default CartItem;
////<span>{props.amount}</span>