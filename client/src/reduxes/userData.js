import { createSlice } from "@reduxjs/toolkit"

export const userData = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null;
        }
    }
})


export const { login, logout } = userData.actions;

export const chooseUserData = (state) => state.user.user;

export default userData.reducer;