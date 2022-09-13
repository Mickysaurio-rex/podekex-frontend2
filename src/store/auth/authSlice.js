import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    date: null

}

export const authSlice = createSlice({ //Aqui se declara todas las acciones y reducers
    name: 'auth',
    initialState,
    reducers: {
        isLoading: (state) => { //el nombre es la accion, el state seria el dispatch y el incremento es el reducer
            state.isLoading = !state.isLoading;
        },
        setUser: (state, action) => { //el nombre es la accion, el state seria el dispatch y el incremento es el reducer
            state.isLoading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            state.date = new Date();
        },
        logout: (state, action) => { //el nombre es la accion, el state seria el dispatch y el incremento es el reducer
            state.user = null;
            state.isAuthenticated = false;
            state.date = null;

        },
    },
})

export const { isLoading, setUser, logout } = authSlice.actions

export default authSlice.reducer