import { isLoading, setUser } from "./authSlice";
import {
    logInWithEmailAndPassword
} from "../../config/firebaseConfig";

const user = {
    name: 'Paul',
    lastName: 'Landaeta',
    password: 'password123'
}

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(isLoading());
        setUser(setUser(user));
        const loginResponse = await 
            logInWithEmailAndPassword(email, password);
        console.log(user);
        dispatch(setUser(user));
        //TODO:
        // Dispatch(firebase login)
        // await datos user
        // dispatch(setUser(userData))
    }
}