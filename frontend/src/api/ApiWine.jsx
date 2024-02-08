import ApiService from "./ApiService";

export const getAllWines = async () => {
    try {
        const response = await ApiService.get("/vines/get");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getWineById = async (id) => {
    try {
        const response = await ApiService.get(`/vines/get/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}