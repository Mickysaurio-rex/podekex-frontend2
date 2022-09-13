import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  pokemoncito: null,

}

export const pokedexSlice = createSlice({ //Aqui se declara todas las acciones y reducers
  name: 'pokedex',
  initialState,
  reducers: {
      isLoading: (state) => { //el nombre es la accion, el state seria el dispatch y el incremento es el reducer
      state.value = true
    },
    pokemon: (state, action) => {
      state.pokemoncito = action.payload
    },
  },
})

export const { isLoading, pokemon } = pokedexSlice.actions

export default pokedexSlice.reducer