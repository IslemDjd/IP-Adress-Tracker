import { instance } from "../Configs/Axios";

const GetLocation = async (ipAddress) => {
    try {
        const response = await instance.get('', { params: { ipAddress } });
        return response.data;
    } catch (error) {
        return error.response?.data || { error: "An error happend" };
    }
};

export default GetLocation;
