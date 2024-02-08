import ApiService from "./ApiService";

export const getAllDiscovery = async () => {
    try {
        const response = await ApiService.get("/discovery/get");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}