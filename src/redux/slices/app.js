import {createSlice} from "@reduxjs/toolkit";

import {dispatch} from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // Starred, shared, contact


    }
}
const slice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSideBar(state) {
            state.sidebar.open = !state.sidebar.open;
          },
        updateSideBarType(state, action) {
        state.sidebar.type = action.payload.type;
        },
    },
})

export default slice.reducer;

export function ToggleSidebar() {
    return async () => {
        dispatch(slice.actions.toggleSideBar())
    }
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(slice.actions.updateSideBarType({
            type,
        }))
    }
}