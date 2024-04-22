import { createContext, useState, useEffect } from "react"

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

  //shopping cart . order 
  const [order, setOrder] = useState([])

  //get Products 
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  //get Products By Title
  const [searchByTitle, setSearchByTitle] = useState(null)

  //get Products by Tag "Category"
  const [searchByTag, setSearchByTag] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByTag = (items, searchByTag) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByTag.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByTag) => {
    if (searchType == 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType == 'BY_TAG') {
      return filteredItemsByTag(items, searchByTag)
    }
    if (searchType == 'BY_TITLE_AND_TAG') {
      return filteredItemsByTag(items, searchByTag).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }


  useEffect(() => {
    if (searchByTitle && searchByTag) setFilteredItems(filterBy('BY_TITLE_AND_TAG', items, searchByTitle, searchByTag))
    if (searchByTitle && !searchByTag) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByTag))
    if (!searchByTitle && searchByTag) setFilteredItems(filterBy('BY_TAG', items, searchByTitle, searchByTag))
    if (!searchByTitle && !searchByTag) setFilteredItems(filterBy(null, items, searchByTitle, searchByTag))
  }, [items, searchByTitle, searchByTag])








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
      setCartProducts,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      setFilteredItems,
      searchByTag,
      setSearchByTag
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
