export const createReservation = async (formData) => {
    try {
        const response = await fetch("http://localhost:5000/reservations/create", {
            method: "POST",
            body: formData
        });
        return response;

    } catch (error) {
        console.error(error);
    }
}

