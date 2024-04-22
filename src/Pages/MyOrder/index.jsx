import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../../Components/OrderCard"
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"


export const MyOrder = () => {
  const context = useContext(ShoppingCartContext)
  const currentpath = window.location.pathname
  let index = currentpath.substring(currentpath.lastIndexOf("/") +1)
  if(index == "last") index = context.order?.length - 1 
  
  
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-2">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black" />
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className='flex flex-col w-80'>
        {context.order?.[index]?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  )

}