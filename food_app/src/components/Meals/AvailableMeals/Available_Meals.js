
import React from "react";
import classes from './Available_Meals.module.css';
import Meals_Items from "../Meal_Items/Meals_Items";
import Card from "../../Ul/Card";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () =>{

  const Meals_Dummay = DUMMY_MEALS.map((meals) => <Meals_Items 
  key = {meals.id} 
  id = {meals.id}
  name ={meals.name} 
  description = {meals.description}
  price = {meals.price} 
  />)

  return(
    <>
      <section className={classes.meals}>
      <Card>
      <ul>{Meals_Dummay}</ul>
      </Card>
      </section>
    </>
  )
}
export default AvailableMeals;