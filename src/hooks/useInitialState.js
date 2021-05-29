import { useState } from 'react'
import initialState from '../initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const addToCart = payload => {
    setState({
      ...state,
      cart:[...state.cart, payload]
    })
  }

  // const removeFromCart = payload => {
  //   setState({
  //     ...state,
  //     cart: state.cart.filter(items => items.id !== payload.id),
  //   });
  // }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.cartId !== payload),
    });
  };

  // useInitialState.js
  // const removeFromCart = (payload, indexToRemove) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.filter((_item, indexCurrent) => indexCurrent !== indexToRemove),
  //   });
  // };

  return {
    addToCart,
    removeFromCart,
    state,
  }
}

export default useInitialState