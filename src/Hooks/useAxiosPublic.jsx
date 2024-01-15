import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://real-state-platform-server-side.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;