
  import React, { useContext } from "react";
  import classes from './Meals_Items.module.css';
import Meals from "../Meals/Meals";
import MealForm from "./Meal_Form/Meal_Form";
import CartConntext from "../../Store/cart_contect";

  const Meals_Items = (props) =>{
    
    const cartCtx = useContext(CartConntext)

    const prices = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
      //console.log(props.price)
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: amount,
        
      });
     // console.log(cartCtx);
    };

    return(
     <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{prices}</div>

        </div>
       <div>
      <MealForm  id={props.id}  onAddToCart={addToCartHandler}/>
       </div>
     
     </li>
    )
  } 
  export default Meals_Items;