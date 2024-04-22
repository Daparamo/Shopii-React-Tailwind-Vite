import { XMarkIcon, } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import "./styles.css"
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../utils'


export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handledCheckout = () => {
    const orderToAdd = {
      date: Date.now(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.lenght,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
  }
  return (
    <aside
      className={`${context.isProductCheckoutOpen ? "felx" : "hidden"} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white `}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div className='cursor-pointer'>
          <XMarkIcon onClick={() => context.closeProductCheckout()} className="h-6 w-6 text-black" />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {context.cartProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-bold text-xl'>Total Price</span>
          <span className='font-bold text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to="my-orders/last">
          <button className='bg-black py-3 text-white rounded-lg w-full' onClick={() => handledCheckout()}>checkout</button>
        </Link>
      </div>
    </aside>
  )
}
