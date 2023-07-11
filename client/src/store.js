import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reduxes/userData.js";


export default configureStore({
    reducer: {
        userData: userReducer,
    }
})