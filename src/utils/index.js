import { useContext } from "react"

/**
 * calculate total price of products in cart
 * @param {array} products cartProduct: array of objects
 * @returns {number} totalPrice
 */
export const totalPrice = (products) => {
    let total = 0
    products.forEach(product => total += product.price)
    return total
}