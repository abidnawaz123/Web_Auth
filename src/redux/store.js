import { configureStore } from "@reduxjs/toolkit";
import LoggedinUser from "./slice"

const store = configureStore({
    reducer: {
        loggedInUser: LoggedinUser,
    }
})

export default store;