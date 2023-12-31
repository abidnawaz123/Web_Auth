import { createSlice } from "@reduxjs/toolkit";

const loggedInUserSlice = createSlice({
    name: 'loggedinuser',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        loggedInUser(state, action) {
            console.log('coming in action ->',action)
            state.isLoggedIn = action.payload
        }
    }
})

export const { loggedInUser } = loggedInUserSlice.actions
export default loggedInUserSlice.reducer