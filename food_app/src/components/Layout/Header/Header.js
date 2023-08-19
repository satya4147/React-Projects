import React, { Fragment } from 'react';
import TopImage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from '../HeaderCartbutton/HeaderCartbutton';

const Header = (props) =>{
return(
  <Fragment>
    <header className={classes.header}>
    <h1>React Meals</h1>
    <HeaderCartButton onClick ={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={TopImage} />
    </div>
  </Fragment>
)
}
export default Header;