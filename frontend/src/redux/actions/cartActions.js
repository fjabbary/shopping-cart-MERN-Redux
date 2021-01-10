import * as actionsTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: actionsTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imgUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty: qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}


export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionsTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}























// export const addToCart = (id, qty) => {
//     return async function(dispatch){

//     }
// }