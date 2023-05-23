import { configureStore } from '@reduxjs/toolkit'
import activeTrip from './activeTrip'
export const store = configureStore({
    reducer: {
        activeTrip
    },
})
