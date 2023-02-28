
import  ReactDOM  from "react-dom";
import { Fragment } from 'react';


const Backdrop = (props) => {
    return <div/>
}

const ModalOverlay = (props) => {
    return(
        <div >
            <div>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    const PortalElement = document.getElementById("overlays");
   
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />,PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
        </Fragment>
    )
}

export default Modal;