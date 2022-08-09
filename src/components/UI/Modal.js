import styles from './Modal.module.css';
import {Fragment} from "react";
import {createPortal} from "react-dom";

const BackDrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const Modal = props => {
    const portalElement = document.getElementById('overlays')
    return (
        <Fragment>
            {createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;