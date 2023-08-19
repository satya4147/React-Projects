import  { Fragment } from "react";
import classes from './Modal.module.css';
import ReactDOM  from "react-dom";


const Backdrop = props =>{
  return<div className={classes.backdrop} onClick = {props.onClsoe}></div>
}

const ModalOverlap = (props) =>{
  return<div className={classes.modal}> 
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalElement = document.getElementById('overlap');


const Modal = (props) =>{

  return(
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClsoe = {props.onClsoe} /> , portalElement)}
      {ReactDOM.createPortal(<ModalOverlap> {props.children} </ModalOverlap> , portalElement)}
    </Fragment>
  )
}
export default Modal;