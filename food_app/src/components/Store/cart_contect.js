import React from "react";

const CartConntext = React.createContext({
  items : [],
  totalAmount : 0,
  addItem : (item) =>{},
  removeItem : (id) =>{}
})

export default CartConntext;