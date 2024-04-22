import { XMarkIcon, } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import "./styles.css"
import { OrderCard } from '../OrderCard'


export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
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
      <div className='px-6 overflow-y-scroll'>
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
    </aside>
  )
}
