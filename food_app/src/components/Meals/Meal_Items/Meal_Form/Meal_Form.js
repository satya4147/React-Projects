import React, { useRef, useState } from "react";
import classes from './Meal_Form.module.css';
import Input from "./Meal_FormInput";

const MealForm =(props) =>{
  const [amountIsValid , setAmountIsVaild] = useState(true)
  const amountInputRef = useRef();

  const submitHandler = (event) =>{
    event.preventDefault();

    const entertedAmount = amountInputRef.current.value;
    const numberEntertedAmount = +entertedAmount;

      if(entertedAmount.trim().length === 0 || numberEntertedAmount < 1 || numberEntertedAmount > 5){
        
        setAmountIsVaild(false);
        return;

      }

      // console.log(numberEntertedAmount)
      props.onAddToCart(numberEntertedAmount)

  } 

  return(
    <form className={classes.form} onSubmit={submitHandler}> 
    <Input 
    ref={amountInputRef}
    label = 'Amount'
    input = {{
      id: 'amount_' + props.id,
      type : 'number',
      min : '1',
      max : '5',
      step : '1',
      defaultValue : '1'
    }}
    />
    <button> +Add </button>
    {!amountIsValid && <p>Please enter vaild amount (1-5).</p>}
    </form>
  )
}
export default MealForm;