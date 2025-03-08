import {createSlice} from "@reduxjs/toolkit";

import {dispatch} from "../store";

const intialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // Starred, shared, contact


    }
}
const slice = createSlice({
    name: "app",
    intialState,
    reducers: {
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open;
        },
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },
    },
})

export default slice.reducer; 