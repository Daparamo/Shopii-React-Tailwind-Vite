import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


export const Card = (data) => {

  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.closeProductCheckout()
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
    context.openProductCheckout()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (!isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p1"
          onClick={(event) => addProductsToCart(event, data.data)}>
          <PlusIcon className="w-6 h-6 text-black" />
        </div>
      )
    }
    else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p1"
        >
          <CheckIcon className="w-6 h-6 bg-green-500 rounded-full text-white" />
        </div>
      )
    }
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}
