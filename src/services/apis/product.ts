import axiosWithConfig from "./axios-with-config"

export const fetchProducts = async () => {
    try {
        const response = await axiosWithConfig.get("/products")
        return response
    } catch (error) {
        console.log(error)
    }
}