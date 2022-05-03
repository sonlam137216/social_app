import axios from "axios";
import { apiUrl } from "../constants/constants";

const authAPI = {
    login: async (userInfo) => {
        const response = await axios.post(`${apiUrl}/user/login`, userInfo)
        return response.data
    }
}

export default authAPI