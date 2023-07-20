import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    driveToShop: true,
    deliveryToShopTripStarted: false,
    deliveryToCustomerTripStarted: false,
    origin: { latitude: 10.2033, longitude: 48.7192 },
    destination: { latitude: 9.7866, longitude: 49.3653 },
    pickupData: {},
    dropData: {},
    region: { latitude: 2.046934, longitude: 45.318161, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
}

export const deliveryMap = createSlice({
    name: 'deliveryMap',
    initialState,
    reducers: {
        setDriveToShop: (state, action) => {
            state.driveToShop = action.payload
        },
        setDeliveryToShopTripStarted: (state, action) => {
            state.deliveryToShopTripStarted = action.payload
        },
        setDeliveryToCustomerTripStarted: (state, action) => {
            state.deliveryToCustomerTripStarted = action.payload
        },
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setPickupData: (state, action) => {
            state.pickupData = action.payload
        },
        setDropData: (state, action) => {
            state.dropData = action.payload
        },
        setRegion: (state, action) => {
            state.region = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setDeliveryToCustomerTripStarted, setDeliveryToShopTripStarted, setDestination, setDriveToShop, setDropData, setOrigin, setPickupData, setRegion } = deliveryMap.actions

export default deliveryMap.reducer