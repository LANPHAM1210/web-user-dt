import axios from "axios";

const baseUrl = "https://034a-118-70-132-104.ngrok-free.app/api/auth/cart";

export const fetchCart = async () => {
    const response = await axios.get(`${baseUrl}/cart`);
    return response.data;
}