import { ChevronDoubleRightIcon, TrashIcon } from "@heroicons/react/24/solid"

export const OrdersCard = props => {
  const { totalPrice, totalProducts, date } = props


  return (
    <div className="flex justify-between items-center border border-black rounded-lg w-80 p-4 mb-4 ">
      <div className="flex justify-between items-center w-full">
        <p className="flex flex-col">
          <span>{date}</span>
          <span className="">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
        <span className="font-bold text-2xl">${totalPrice}</span>
        <ChevronDoubleRightIcon className="h-6 w-6 text-black" />
        </p>
      </div>
    </div>
  )
}
