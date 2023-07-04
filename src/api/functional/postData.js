import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "..";
import axios from "axios";

export const postData = async (endPoint, payload, setError, setIsLoading) => {
    const access_token = await AsyncStorage.getItem("access_token")
    const token_type = await AsyncStorage.getItem("token_type")
    try {
        if (access_token && token_type) {
            const data = await fetch(`https://www.sweyn.co.uk/v1/${endPoint}`, {
                method: 'POST',
                body: payload,
                headers: {
                    'Authorization': `${token_type} ${access_token}`
                }
            })
            const result = await data.json();
            setIsLoading(false)
            return { result }
        }
    } catch (error) {
        console.log(error);
        setError(error)

    } finally {
        setIsLoading(false)
    }

}