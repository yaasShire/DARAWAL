import { configureStore } from '@reduxjs/toolkit'
import activeTrip from './activeTrip'
import deliveryMap from './deliveryMap'
export const store = configureStore({
    reducer: {
        activeTrip,
        deliveryMap
    },
})
