import './Input.css';
import React from 'react';


const Input = React.forwardRef((props, ref) => {
    return(
        <div className="Cover">
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} ref={ref}/>
            {console.log(ref)}
        </div>
    )
})

export default Input;