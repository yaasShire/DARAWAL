import axios from 'axios'

export const API = axios.create({
    baseURL: "https://www.sweyn.co.uk/v1/"
})