import ApiService from "./ApiService";

export const getAllDesserts = async () => {
    try {
        const response = await ApiService.get("/desserts/get");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

