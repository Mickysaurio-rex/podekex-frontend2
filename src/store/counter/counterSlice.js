import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,

}




export const counterSlice = createSlice({ //Aqui se declara todas las acciones y reducers
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { //el nombre es la accion, el state seria el dispatch y el incremento es el reducer
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer