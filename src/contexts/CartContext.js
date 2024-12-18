import React, {useState, createContext} from "react";

export const CartContext = createContext({});

function CartProvider ({children}){
  const [cart, setCart] = useState([]);

  function addCart(newItem){
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if(indexItem != -1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount +1; // adicionando +1 quantidade
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price // multiplando o preço do produto, quantidade * preço
      setCart(cartList)
      console.log([cartList])
      return;
    }
    let data ={
      ...newItem,
      amount: 1,
      total: newItem.price
    }
    setCart(products => [...products, data])
    
  }


  return(
    <CartContext.Provider
      value={{
        cart,
        addCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;