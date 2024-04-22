import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // ShoppingCart Counter
  const [count, setCount] = useState(0)
  
  // Product Detail . Open Close 
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product Detail . Show Product
  const [productToShow, setProductToShow] = useState({})
  console.log("product", productToShow)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow
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
