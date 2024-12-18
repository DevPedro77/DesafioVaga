import React, {useState, createContext} from "react";


export const CartContext = createContext({});

function CartProvider ({children}){
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  function addCart(newItem){
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if(indexItem != -1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount +1; // adicionando +1 quantidade
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price // multiplando o preço do produto, quantidade * preço
      setCart(cartList)
      totalResultCart(cartList)
      return;
    }
    let data ={
      ...newItem,
      amount: 1,
      total: newItem.price
    }
    setCart(products => [...products, data])
    totalResultCart([...cart, data])
    
  }

  function removeItemCart(products){
    const indexItem = cart.findIndex(item => item.id === products.id)

    if(cart[indexItem]?.amount > 1){
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount -1;
      cartList[indexItem].total =  cartList[indexItem].total -  cartList[indexItem].price;

      setCart(cartList)
      totalResultCart(cartList)
      return;
    }

    const removeItem =cart.filter(item => item.id !== products.id)
    setCart(removeItem)
    totalResultCart(removeItem)
  }

  function totalResultCart(items){
    let myCart = items;
    let result = myCart.reduce( (acc, obj) => {return acc + obj.total}, 0)
    setTotal(result.toFixed(2))
  }


  return(
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeItemCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;