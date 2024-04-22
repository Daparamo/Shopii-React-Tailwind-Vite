import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // ShoppingCart Counter
  const [count, setCount] = useState(0)

  // Product Detail . Open Close 
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // checkout product Detail . Open Close 
  const [isProductCheckoutOpen, setIsProductCheckoutOpen] = useState(false)
  const openProductCheckout = () => setIsProductCheckoutOpen(true)
  const closeProductCheckout = () => setIsProductCheckoutOpen(false)

  // Product Detail . Show Product
  const [productToShow, setProductToShow] = useState({})

  //Shopping cart . add Prdocuts to cart 
  const [cartProducts, setCartProducts] = useState([])


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      isProductCheckoutOpen,
      openProductCheckout,
      closeProductCheckout,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const index = () => {
  createContext
  return (
    <div>index</div>
  )
}
