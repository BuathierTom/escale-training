import ApiService from "./ApiService";

export const getAllEscale = async () => {
    try {
        const response = await ApiService.get("/escale/get");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}