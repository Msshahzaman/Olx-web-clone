import { createSlice } from '@reduxjs/toolkit'

const Cartslice = createSlice({
    name: 'cart',
    initialState: {
      cart :[]
    },
    reducers: {
      addToCart: (state,data) => {
        
        state.cart.push(data.payload)
        console.log('state.cart',state.cart)
      },
      removeFromCart: state => {
      }
    }
  })
  
  export const { addToCart } = Cartslice.actions
 export default Cartslice