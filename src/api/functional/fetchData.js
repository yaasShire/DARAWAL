import AsyncStorage from "@react-native-async-storage/async-storage"
import { API } from ".."
export const fetchData = async (endPoint, setError, setIsLoading) => {
    const access_token = await AsyncStorage.getItem("access_token")
    const token_type = await AsyncStorage.getItem("token_type")
    try {
        if (access_token && token_type) {
            const result = await fetch(`https://api.elabis.app/v1/${endPoint}`, {
                // method: "GET",
                headers: new Headers({
                    'Authorization': `${token_type} ${access_token}`,
                }),

            })
            // console.warn(access_token)
            const data = await result.json()
            return { data }
        }
    } catch (error) {
        setError(true)
        console.warn(error);
    } finally {
        setIsLoading(false)
    }
}