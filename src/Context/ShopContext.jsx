import React, { createContext } from "react";
import all_products from "../assets/assets/all_products";
import { useState } from "react";
import Item from "../Components/Item";
// Create the context
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  // Define the state for all products
  const getDefaultCart=()=>{
    let cart={};
    for (let index=0;index<all_products.length+1;index++){
      cart[index]=0;
    }
     return cart;

  }

  

  // Define the context value to be shared
  
  const [cartItems,setCartItems]=useState(getDefaultCart());
 
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1 }))
      console.log(cartItems);
  
  }
  const removeCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  }
  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo=all_products.find((product)=>product.id==Number(item))
      totalAmount+=itemInfo.new_price* cartItems[item];
      }
    }
      return totalAmount;
    
  }
  const getTotalCartItems=()=>{
  let totalItem=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
    totalItem+=cartItems[item];
    }
  }
    return totalItem;
  
}
 const contextValue = { getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeCart};
 console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider; // Export the provider
