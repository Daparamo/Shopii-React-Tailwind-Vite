import { useContext } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

export const Home = () => {
  const context = useContext(ShoppingCartContext)


  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      
      return (
        context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))
      )
    }
    else {
      return (
        <div className="flex items-center justify-center w-full">We don't have anything 🙄</div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-4">
        <h1 className="text-2xl font-bold">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a Product"
        className="rounded-full border-2 border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)} />

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>

      <ProductDetail />
    </Layout>
  )

}