import { useContext } from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"



export const MyOrders = () => {
  const context = useContext(ShoppingCartContext)
  
  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-4">
        <h1 className="text-2xl font-bold">My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.products.length} />
          </Link>
        ))

      }

    </Layout>
  )

}