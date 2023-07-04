
import { useState } from 'react'
export const authEndPointsHandler = async (endpoint, payload, setError, setIsLoading) => {
    try {
        const response = await fetch(`https://sweyn.co.uk/v1/${endpoint}`, {
            method: "post",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: payload
        })
        const data = await response.json();
        setIsLoading(false)
        return data;
    } catch (error) {
        setError(error)
    } finally {
        setIsLoading(false)
    }
}

