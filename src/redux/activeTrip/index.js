import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    activeTrip: {}
}

export const activeTrip = createSlice({
    name: 'trip',
    initialState,
    reducers: {
        setActiveTrip: (state, action) => {
            state.activeTrip = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setActiveTrip } = activeTrip.actions

export default activeTrip.reducer