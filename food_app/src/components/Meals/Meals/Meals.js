import React from "react";
import classes from './Meals.module.css';
import AvailableMeals from "../AvailableMeals/Available_Meals";
import MealsSummary from "../MealsSummary/Meals_Summary";


const Meals = () =>{
  return(
    <>
      <MealsSummary />
    <AvailableMeals />
    </>
  )
}

export default Meals;